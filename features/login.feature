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
