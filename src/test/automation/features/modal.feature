Feature: Test the opening and closing of the carousel modal
  As a developer
  I want to be able to test the modal.

  Background:
    Given I open the site "/stub/catalog/item/1"

  Scenario: When i open the webpage the carousel modal is not showing
    Then  I expect that element ".modal" does not have the class "modal_show-modal"

  Scenario: When i open the webpage and click the show modal button the carousel modal shows
    When  I click on the button ".carousel__view-larger-button"
    Then  I expect that element ".modal" has the class "modal_show-modal"

  Scenario: When i open the webpage and click the show modal button the carousel modal shows, I can dismiss it by cicking on the X
    When  I click on the button ".carousel__view-larger-button"
    And   I click on the button ".modal__close-button"
    Then  I expect that element ".modal" does not have the class "modal_show-modal"

