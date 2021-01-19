Feature: Test the opening and closing of the carousel modal
  As a developer
  I want to be able to test the modal.

  Background:
    Given I open the site "/stub/catalog/item/1"

  Scenario: When i open the webpage there is no value in the quantity field
    Then  I expect that element ".product-order-quantity input" not contains any text

  Scenario: When i open the webpage and click the add-items button the input contains text 1
    When  I click on the button ".product-order-quantity .add-items"
    Then  I expect that element ".product-order-quantity input" contains any text
    And   I expect that element ".product-order-quantity input" contains the text "1"

  Scenario: When i open the webpage and click the add-items button two times the input contains text 2
    When  I click on the button ".product-order-quantity .add-items"
    And   I click on the button ".product-order-quantity .add-items"
    Then  I expect that element ".product-order-quantity input" contains any text
    And   I expect that element ".product-order-quantity input" contains the text "2"

  Scenario: When i open the webpage and click the add-items button two times and remove once the input contains text 1
    When  I click on the button ".product-order-quantity .add-items"
    And   I click on the button ".product-order-quantity .add-items"
    And   I click on the button ".product-order-quantity .remove-items"
    Then  I expect that element ".product-order-quantity input" contains any text
    And   I expect that element ".product-order-quantity input" contains the text "1"

  Scenario: When i open the webpage and click the add-items button and the remove-items the input contains text 0
    When  I click on the button ".product-order-quantity .add-items"
    And   I click on the button ".product-order-quantity .remove-items"
    Then  I expect that element ".product-order-quantity input" contains any text
    And   I expect that element ".product-order-quantity input" contains the text "0"

  Scenario: When i open the webpage and click the add-items button and the remove-items the input contains text 0
    When  I click on the button ".product-order-quantity .add-items"
    And   I click on the button ".product-order-quantity .remove-items"
    Then  I expect that element ".product-order-quantity input" contains any text
    And   I expect that element ".product-order-quantity input" contains the text "0"

  Scenario: Set the content of a input field to string value will not show anything
    When  I set "test" to the inputfield ".product-order-quantity input"
    Then  I expect that element ".product-order-quantity input" not contains any text

