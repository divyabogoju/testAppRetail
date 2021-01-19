Feature: Test the Image carousel scroll
  As a developer
  I want to be able to test the scrolling through of the image carousel

  Background:
    Given I open the site "/stub/catalog/item/1"

  Scenario: When i open the webpage the carousel thumbnail should be starting at the first element
    Then  I expect that index "0" of elementList ".carousel__thumbnail-container" has the class "carousel__thumbnail-container_current"
    Then  I expect that index "0" of elementList ".carousel__preview-img" has the class "carousel__preview-img_current"

  Scenario: When i click the previous button for the image the first element should become the next value from current
    When  I click on the button ".carousel__control-button-prev"
    Then  I expect that index "0" of elementList ".carousel__thumbnail-container" has the class "carousel__thumbnail-container_next"
    Then  I expect that index "0" of elementList ".carousel__preview-img" does not have the class "carousel__preview-img_current"

  Scenario: When i click the next button for the image the first element should become the next value from current
    When  I click on the button ".carousel__control-button-next"
    Then  I expect that index "0" of elementList ".carousel__thumbnail-container" has the class "carousel__thumbnail-container_prev"
    Then  I expect that index "1" of elementList ".carousel__preview-img" has the class "carousel__preview-img_current"