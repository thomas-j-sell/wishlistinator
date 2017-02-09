Feature: Homepage

  @watch
  Scenario: Homepage
    Given I navigate to the homepage
    Then The app dispays the homepage

  @watch
  Scenario: Sign-in
    Given I navigate to the homepage
    When I click on the sign in button
    When I enter my credentials
    Then I should be signed in

  # @watch
  Scenario: Create User
    Given I navigate to the homepage
    Given I am not logged in
    When I click on the sign in button
