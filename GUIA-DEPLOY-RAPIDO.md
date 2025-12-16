# 🚀 GUIA RÁPIDO DE DEPLOY (5 MINUTOS)

## ✅ CHECKLIST PRÉ-DEPLOY

- [ ] Conta no GitHub criada
- [ ] Conta na Vercel criada (usar GitHub para login)
- [ ] Git instalado no computador

---

## 📦 PASSO 1: CRIAR REPOSITÓRIO GITHUB

### **Via Interface GitHub:**

1. Acesse: https://github.com/new
2. Nome do repositório: `proposta-chiller-hablla`
3. Descrição: "Template de Proposta Comercial - Chiller Peças"
4. **IMPORTANTE:** Marque "Add a README file"
5. Clique em "Create repository"
6. Anote a URL: `https://github.com/SEU-USUARIO/proposta-chiller-hablla`

---

## 💻 PASSO 2: SUBIR ARQUIVOS

### **Opção A: Via GitHub Desktop (Mais Fácil)**

1. **Baixe:** https://desktop.github.com
2. **Instale** GitHub Desktop
3. **Login** com sua conta
4. **Clone** o repositório que você criou
5. **Copie** todos os arquivos do projeto para a pasta clonada:
   - index.html
   - package.json
   - vercel.json
   - README.md
   - .gitignore
6. **No GitHub Desktop:**
   - Escreva: "🎉 Initial commit"
   - Clique em "Commit to main"
   - Clique em "Push origin"

### **Opção B: Via Terminal (Para Desenvolvedores)**

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/proposta-chiller-hablla.git
cd proposta-chiller-hablla

# 2. Copie os arquivos para esta pasta
# (index.html, package.json, vercel.json, README.md, .gitignore)

# 3. Commit e push
git add .
git commit -m "🎉 Initial commit - Template Proposta Chiller"
git push origin main
```

---

## 🌐 PASSO 3: DEPLOY NA VERCEL

### **Via Interface (RECOMENDADO):**

1. **Acesse:** https://vercel.com
2. **Login** com GitHub (botão "Continue with GitHub")
3. **Autorize** Vercel no GitHub
4. **Clique** em "Add New..." → "Project"
5. **Procure** por "proposta-chiller-hablla"
6. **Clique** em "Import"
7. **Configure:**
   - Framework Preset: Other
   - Build Command: (deixe vazio)
   - Output Directory: (deixe vazio)
8. **Clique** em "Deploy"
9. **Aguarde** 1-2 minutos
10. **✅ PRONTO!** Anote a URL gerada

**URL será algo como:**
```
https://proposta-chiller-hablla.vercel.app
```

---

## 🔧 PASSO 4: CONFIGURAR NO HABLLA

1. **Acesse** Hablla Studio: https://studio.hablla.com
2. **Vá em:** Configurações → Orçamentos → Orçamentos Personalizados
3. **Clique** em "Adicionar" ou "+" 
4. **Preencha:**
   - Nome: Proposta Comercial Premium
   - URL da landing page: `https://proposta-chiller-hablla.vercel.app`
5. **Salve**

---

## 🧪 PASSO 5: TESTAR

### **Teste 1: Criar Proposta**

1. No Hablla, **crie uma nova proposta**
2. **Selecione** o orçamento personalizado "Proposta Comercial Premium"
3. **Preencha** todos os dados:
   - Cliente
   - Produtos
   - Valores
   - Condições de pagamento
4. **Salve** a proposta

### **Teste 2: Visualizar**

1. **Abra** a proposta criada
2. **Clique** no botão para visualizar
3. **Você será redirecionado** para a URL da Vercel
4. **Verifique:**
   - ✅ Dados aparecem corretamente
   - ✅ Layout está bonito
   - ✅ Valores estão formatados
   - ✅ Não há erros

### **Teste 3: Gerar PDF**

1. Na proposta aberta, **pressione** `Ctrl+P` (Windows) ou `Cmd+P` (Mac)
2. **Selecione** "Salvar como PDF"
3. **Salve** o PDF
4. **Abra** o PDF e verifique qualidade

---

## ⚙️ PASSO 6: PERSONALIZAR (OPCIONAL)

### **Alterar Logo:**

1. **Abra** o arquivo `index.html` no editor
2. **Procure** por (linha ~460):
   ```html
   <div class="company-logo">🧊 CHILLER PEÇAS</div>
   ```
3. **Substitua** por:
   ```html
   <div class="company-logo">
       <img src="URL_DA_LOGO" alt="Logo" style="height: 50px;">
   </div>
   ```
4. **Salve**
5. **Commit e push:**
   ```bash
   git add index.html
   git commit -m "✨ Adicionado logo da empresa"
   git push origin main
   ```
6. **Vercel** faz deploy automático (1-2 min)

### **Alterar Cores:**

1. **Abra** `index.html`
2. **Procure** por (linha ~60):
   ```css
   background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
   ```
3. **Substitua** pelos códigos das suas cores
4. **Salve, commit e push**

---

## 🐛 PROBLEMAS COMUNS

### **Problema 1: "Token não encontrado"**
**Solução:** Sempre acesse via Hablla, nunca diretamente pela URL

### **Problema 2: Dados não aparecem**
**Solução:** 
1. Abra Console (F12)
2. Veja o erro
3. Verifique se o token está válido

### **Problema 3: Deploy falhou na Vercel**
**Solução:**
1. Verifique se todos os arquivos estão no GitHub
2. Veja os logs de erro na Vercel
3. Tente fazer deploy novamente

### **Problema 4: Layout quebrado no mobile**
**Solução:** O template é responsivo, limpe o cache do navegador

---

## 📊 APÓS O DEPLOY

### **✅ Validar:**
- [ ] URL da Vercel funcionando
- [ ] Hablla consegue redirecionar
- [ ] Dados carregam corretamente
- [ ] Layout está bonito
- [ ] PDF gera corretamente

### **📈 Monitorar:**
- [ ] Taxa de conversão de propostas
- [ ] Feedback dos clientes
- [ ] Tempo de resposta dos clientes
- [ ] Erros no console (se houver)

### **🎯 Treinar Equipe:**
- [ ] Mostrar novo formato
- [ ] Ensinar a gerar propostas
- [ ] Explicar vantagens
- [ ] Coletar feedback

---

## 🎉 RESULTADO FINAL

**Você terá:**

✅ URL única para propostas: `https://proposta-chiller-hablla.vercel.app`  
✅ Propostas geradas automaticamente  
✅ Design profissional e moderno  
✅ PDF de alta qualidade  
✅ Clientes impressionados  
✅ Maior taxa de conversão  

---

## 📞 PRECISA DE AJUDA?

**Durante o deploy:**
- Docs Vercel: https://vercel.com/docs
- Docs GitHub: https://docs.github.com

**Após o deploy:**
- Revise o README.md completo
- Veja os logs na Vercel
- Teste com token válido

---

## ⏱️ TEMPO ESTIMADO

- Criar repositório GitHub: **2 minutos**
- Subir arquivos: **1 minuto**
- Deploy Vercel: **2 minutos**
- Configurar Hablla: **1 minuto**
- Testar: **2 minutos**

**TOTAL: ~8 minutos** ⚡

---

**🚀 MÃOS À OBRA!**

Siga os passos acima e em menos de 10 minutos suas propostas estarão no ar! 💪
