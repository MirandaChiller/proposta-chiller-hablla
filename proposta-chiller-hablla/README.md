# 🧊 Proposta Comercial - Chiller Peças (Integração Hablla)

Template premium de proposta comercial integrado com o sistema Hablla CRM.

## 🎯 Características

✅ Design moderno e profissional  
✅ Integração automática com Hablla via token JWT  
✅ Responsivo (desktop, tablet, mobile)  
✅ Otimizado para impressão e PDF  
✅ Loading screen durante carregamento  
✅ Tratamento de erros elegante  
✅ Formatação automática de valores, datas e documentos  

---

## 🚀 DEPLOY NA VERCEL (5 MINUTOS)

### **PASSO 1: Criar Repositório no GitHub**

```bash
# 1. Crie um novo repositório no GitHub
# Nome sugerido: proposta-chiller-hablla

# 2. Clone o repositório
git clone https://github.com/SEU-USUARIO/proposta-chiller-hablla.git

# 3. Entre na pasta
cd proposta-chiller-hablla

# 4. Copie todos os arquivos do projeto para esta pasta
# (index.html, package.json, vercel.json, README.md)

# 5. Faça o primeiro commit
git add .
git commit -m "🎉 Initial commit - Template Proposta Comercial Chiller"
git push origin main
```

### **PASSO 2: Deploy na Vercel**

#### **Opção A: Via Interface (Mais Fácil)**

1. Acesse: https://vercel.com
2. Login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `proposta-chiller-hablla`
5. Clique em "Deploy"
6. Aguarde 1-2 minutos
7. ✅ Pronto! Anote a URL gerada

#### **Opção B: Via CLI**

```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Siga as instruções na tela
# - Link to existing project? No
# - Project name: proposta-chiller-hablla
# - Directory: ./ (Enter)
# - Override settings? No

# 5. Para deploy em produção
vercel --prod
```

### **PASSO 3: Configurar no Hablla**

1. **Acesse:** Hablla Studio → Orçamentos Personalizados
2. **Adicione novo orçamento personalizado**
3. **Campo "URL da landing page":** Cole a URL da Vercel
   ```
   https://proposta-chiller-hablla.vercel.app
   ```
4. **Salve**
5. **Teste:** Crie uma proposta usando este orçamento

---

## 🔧 ESTRUTURA DO PROJETO

```
proposta-chiller-hablla/
├── index.html          # Template completo (HTML + CSS + JS)
├── package.json        # Configurações do projeto
├── vercel.json         # Configuração de deploy Vercel
└── README.md          # Este arquivo
```

---

## 📋 COMO FUNCIONA

### **Fluxo de Dados:**

```
1. Cliente acessa link da proposta no Hablla
   ↓
2. Hablla redireciona para: https://sua-url.vercel.app/?token=eyJhbG...
   ↓
3. JavaScript decodifica o token JWT
   ↓
4. Faz requisição à API do Hablla
   ↓
5. Recebe dados da proposta
   ↓
6. Popula o template automaticamente
   ↓
7. Cliente vê proposta formatada e profissional
```

### **Variáveis Disponíveis:**

O template utiliza os seguintes dados do Hablla:

**Proposta:**
- `id` - ID da proposta
- `name` - Nome do cliente
- `status` - Status (pending, approved, etc)
- `value` - Valor total
- `created_at` - Data de criação
- `discount_value` - Desconto
- `shipping_value` - Frete
- `taxes_value` - Impostos

**Cliente:**
- `persons[0].name` - Nome do contato
- `persons[0].ssn` - CPF/CNPJ
- `persons[0].phones[0].phone` - Telefone
- `persons[0].customer_status` - Status do cliente

**Vendedor:**
- `user.name` - Nome do vendedor
- `user.email` - Email
- `user.phone` - Telefone

**Produtos:**
- `products[]` - Array de produtos
  - `name` - Nome
  - `sku` - Código
  - `price` - Preço unitário
  - `quantity` - Quantidade
  - `discount_percent` - % Desconto

**Pagamento:**
- `payment_interval.description` - Condição de pagamento
- `payment_interval.code` - Código
- `prediction_date` - Data prevista

---

## 🎨 PERSONALIZAÇÃO

### **Alterar Cores:**

No arquivo `index.html`, procure por (linha ~60):

```css
/* Cor principal */
background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
```

Substitua `#0066cc` e `#0052a3` pelas cores da sua marca.

### **Alterar Logo:**

Procure por (linha ~460):

```html
<div class="company-logo">🧊 CHILLER PEÇAS</div>
```

Substitua por:

```html
<div class="company-logo">
    <img src="URL_DA_SUA_LOGO" alt="Logo" style="height: 50px;">
</div>
```

### **Adicionar Campos:**

Para adicionar novos campos na seção "Informações Adicionais", copie este bloco:

```html
<div class="info-card">
    <div class="info-card-title">Título do Campo</div>
    <div class="info-card-value" id="novo-campo">...</div>
</div>
```

E adicione no JavaScript (linha ~800):

```javascript
document.getElementById('novo-campo').textContent = data.seu_campo || 'N/A';
```

---

## 🐛 TROUBLESHOOTING

### **Erro: "Token não encontrado"**
**Causa:** URL acessada sem o parâmetro `?token=...`  
**Solução:** Sempre acesse via link gerado pelo Hablla

### **Erro: "Erro ao buscar dados da proposta"**
**Causa:** Token inválido ou expirado  
**Solução:** Gere uma nova proposta no Hablla

### **Proposta não carrega (loading infinito)**
**Causa:** Erro na API do Hablla ou CORS  
**Solução:** 
1. Abra o Console (F12)
2. Veja o erro exato
3. Verifique se a URL da API está correta

### **Dados não aparecem**
**Causa:** Estrutura do JSON mudou  
**Solução:**
1. Abra Console (F12)
2. Veja o objeto `data` no log
3. Ajuste o JavaScript conforme necessário

### **Formatação incorreta**
**Causa:** Dados vindo em formato diferente  
**Solução:** Ajuste as funções de formatação no JavaScript

---

## 📱 TESTE LOCAL

Para testar localmente antes do deploy:

```bash
# 1. Instale serve
npm install -g serve

# 2. Inicie servidor local
serve .

# 3. Acesse
http://localhost:3000/?token=SEU_TOKEN_DE_TESTE
```

---

## 🔄 ATUALIZAR DEPLOY

Sempre que fizer alterações:

```bash
# 1. Commit as mudanças
git add .
git commit -m "✨ Descrição das alterações"
git push origin main

# 2. Vercel faz deploy automático
# (se configurado com GitHub)
```

Ou via CLI:

```bash
vercel --prod
```

---

## 📊 MONITORAMENTO

### **Logs da Vercel:**
```
https://vercel.com/seu-usuario/proposta-chiller-hablla/analytics
```

### **Verificar Erros:**
```
https://vercel.com/seu-usuario/proposta-chiller-hablla/logs
```

---

## 🎯 PRÓXIMOS PASSOS

- [ ] Deploy na Vercel
- [ ] Configurar URL no Hablla
- [ ] Testar com proposta real
- [ ] Personalizar cores/logo (opcional)
- [ ] Treinar equipe comercial
- [ ] Monitorar feedback dos clientes

---

## 📞 SUPORTE

**Dúvidas sobre o template:**
- Abra uma issue no GitHub
- Entre em contato com o desenvolvedor

**Dúvidas sobre Hablla:**
- Suporte Hablla: https://hablla.com
- Documentação: https://docs.hablla.com

---

## 📄 LICENÇA

MIT License - Livre para uso e modificação

---

## 🎉 RESULTADO ESPERADO

Antes vs Depois:

| Aspecto | Antes | Depois |
|---------|-------|--------|
| Design | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Profissionalismo | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Conversão | Base | +15-25% |
| Tempo de criação | 15 min | Automático |

---

**Desenvolvido com ❤️ para Chiller Peças**
