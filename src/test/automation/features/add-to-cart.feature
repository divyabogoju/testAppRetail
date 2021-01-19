Feature: Test existence of the add to cart button
  As a developer
  I want to be able to test the existence of the pickup in store button.

  in the stub data
   1. /1 has a purchasingChannelCode = 0
   2. /2 has a purchasingChannelCode = 1
   1. /3 has a purchasingChannelCode = 2

  Scenario: When purchasingChannelCode = 0 in store pickup button exists
    Given I open the site "/stub/catalog/item/1"
    Then  I expect that element ".add-to-cart" does exist

  Scenario: When purchasingChannelCode = 1 in store pickup button exists
    Given I open the site "/stub/catalog/item/2"
    Then  I expect that element ".add-to-cart" does exist

  Scenario: When purchasingChannelCode = 2 in store pickup button doesn't exist
    Given I open the site "/stub/catalog/item/3"
    Then  I expect that element ".add-to-cart" does not exist

