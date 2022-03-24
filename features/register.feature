Feature: Registration Page

  Scenario Outline: As a new user, I want to register

    Given I am on the nl page
    When I close cookies popup
    And I open desktop login popup
    And I click register button
    And I register with valid email, password and <subscribe> to newsletter
    Then Register popup should be closed
    Then Current page should have title "Mijn account"

    Examples:
      | subscribe     |
      | subscribe     |
      | not subscribe |


  Scenario Outline: During registration I want to see validation on email input

    Given I am on the <locale> page
    When I close cookies popup
    And I open desktop login popup
    And I click register button
    When I fill email:<email> on registration page
    Then Email verification message is shown:<message> on registration page

    Examples:
      | locale | email               | message                                       |
      | nl     |                     | Vul het veld in                               |
      | nl     | null                | Sorry, dit is geen geldig e-mailadres         |
      | nl     | test:user@gmail.com | Sorry, dit is geen geldig e-mailadres         |
      | nl     | null@undefined      | Sorry, dit is geen geldig e-mailadres         |
      | pl     | polska              | Przepraszamy, to nie wygląda jak adres e-mail |


  Scenario Outline: During registration I want to see validation on password input

    Given I am on the <locale> page
    When I close cookies popup
    And I open desktop login popup
    And I click register button
    When I fill password:<password> on registration page
    Then Password verification message is shown:<message> on registration page

    Examples:
      | locale | password                     | message                                            |
      | nl     |                              | Vul het veld in                                    |
      | nl     | null                         | Je wachtwoord moet tussen 5 en 20 tekens lang zijn |
      | nl     | Je wachtwoord moet tu        | Je wachtwoord moet tussen 5 en 20 tekens lang zijn |
      | pl     | Grzegorz Brzęczyszczykiewicz | Hasło musi zawierać od 5 do 20 znaków              |


  Scenario Outline: During registration I want to see validation on accept terms checkbox

    Given I am on the <locale> page
    When I close cookies popup
    And I open desktop login popup
    And I click register button
    When I click submit registration button
    Then Accept terms verification message is shown:<message> on registration page

    Examples:
      | locale | message                                                  |
      | nl     | Bevestig dat je akkoord gaat met de algemene voorwaarden |
      | pl     | Zaznacz, aby potwierdzić akceptację regulaminu           |
