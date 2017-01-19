Feature: Homepage

  @watch
  Scenario: Homepage
    Given I navigate to the homepage
    Then The app dispays the homepage

  Scenario: Sign-in
    Given I navigate to the homepage
    When I click on the sign-in button
    When I enter my credentials
    Then I should be signed in

  @watch
  Scenario: My List
    Given I am signed in
    When I click on "My List"
    Then I should see my list
