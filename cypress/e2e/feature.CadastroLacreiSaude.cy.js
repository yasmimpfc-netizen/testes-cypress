describe('Cadastro no Lacrei Saúde', () => {
  it('Preenche e envia o formulário de cadastro com sucesso', () => {
    cy.visit('https://paciente.lacreisaude.com.br/cadastro/')

    cy.get('input[placeholder="Digite seu nome civil ou social"]', { timeout: 10000 })
      .should('be.visible')
      .type('Yasmim')

    cy.get('input[placeholder="Digite seu sobrenome"]').type('Ferreira')
    cy.get('input[placeholder="Digite seu e-mail"]').type('myah.ferreira@hotmail.com')
    cy.get('input[placeholder="Confirme seu e-mail"]').type('myah.ferreira@hotmail.com')

    // ⚙️ Corrigido: só digita no campo visível
    cy.get('input[type="password"]').eq(0).type('SenhaForte123!')
cy.get('input[type="password"]').eq(1).type('SenhaForte123!')

    cy.contains('Li e concordo com os Termos de uso').click({ force: true })
    cy.contains('Tenho 18 anos ou mais').click({ force: true })

    cy.contains('button', 'Cadastrar').should('be.enabled').click()

    // Validação final
    cy.url({ timeout: 15000 }).should('not.include', '/cadastro')
  })
})