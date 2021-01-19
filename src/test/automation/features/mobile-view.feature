Feature: Test existence of the view larger button on mobile view

  Background:
    Given I open the site "/stub/catalog/item/1"
    And   I have a screen that is 320 by 900 pixels
    And   I pause for 1000ms

  Scenario: When i open the webpage the carousel modal is not showing
    Then  I expect that element ".carousel__view-larger-button" is not visible

