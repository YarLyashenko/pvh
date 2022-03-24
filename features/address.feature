Feature: Customer account address

  //ignore because cannot login: failing anti-scraping check

  @Ignore
  Scenario Outline: As an existing user, I want to add address

    Given I am on the <countryCode> page
    When I close cookies popup
    And I open desktop login popup
    And I login with valid email:<email>, password:<password>
    And I click address book button
    And I click new address button
    When I fill firstname:<firstname>, lastname:<lastname>, address1:<address1>, address2:<address2>, city:<city>, zipcode:<zipcode>, phone:<phone>, countryCode:<countryCode>
    And I click save new address
    Then I verify firstname:<firstname>, lastname:<lastname>, address1:<address1>, address2:<address2>, city:<city>, zipcode:<zipcode>, phone:<phone>, country:<country>

    Examples:
      | email                | password             | firstname | lastname  | address1         | address2 | city      | zipcode | phone    | country   | countryCode |  |
      | cijqf9s@testmail.com | SuperSecretPassword! | Luke      | Skywalker | Danzigerkade 165 | 1        | Amsterdam | 1013 AP | 77777777 | Nederland | NL          |  |


  Scenario Outline: As a new user, I want to add address

    Given I am on the <countryCode> page
    When I close cookies popup
    And I open desktop login popup
    And I click register button
    And I register with valid email, password and subscribe to newsletter
    And I click address book button
    And I click new address button
    When I fill firstname:<firstname>, lastname:<lastname>, address1:<address1>, address2:<address2>, city:<city>, zipcode:<zipcode>, phone:<phone>, countryCode:<countryCode>
    And I click save new address
    Then I verify firstname:<firstname>, lastname:<lastname>, address1:<address1>, address2:<address2>, city:<city>, zipcode:<zipcode>, phone:<phone>, country:<country>

    Examples:
      | firstname | lastname | address1         | address2 | city      | zipcode | phone    | country   | countryCode |
      | Dart      | Vader    | Danzigerkade 165 | 2        | Amsterdam | 1013 AP | 77778888 | Nederland | NL          |


