# 🧪 Exercício – Testes de Integração com API (JEST)

## 📄 Objetivo

Criar testes de integração para uma API que devolve livros por ID ou autor.

---

## 📁 Conteúdo

O ficheiro `library.js` contém duas funções:

- `getBookById(id)` → devolve o livro com o ID indicado
- `getBooksByAuthor(author)` → devolve todos os livros de um autor

---

## ✅ O que deve fazer

1. Criar um novo ficheiro chamado `library.test.js`
2. Escrever testes unitários com Jest que:
   - Testem **vários casos possíveis** para cada função
   - Incluam **pelo menos um caso de erro** (ex: ID inexistente, autor sem livros)
3. Confirmar que os testes passam com:

```
npm install
npm test
```

---

## 🎯 Resultado esperado

Uma suite de testes bem estruturada, que mostre como validar respostas da API mesmo sem base de dados real.
