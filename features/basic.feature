Feature: Homepage

  @watch
  Scenario: Homepage
    Given I navigate to the homepage
    Then The app dispays the homepage

  @watch
  Scenario: Sign-in
    Given I navigate to the homepage
    When I click on the sign-in button
    When I enter my credentials
    Then I should be signed in

    # @TODO add a thing about show/hide new wish form
  @watch
  Scenario: My List
    Given I am signed in
    When I click on "My List"
    Then I should see my list

  @watch
  Scenario: Create/Delete Wish
    Given I am signed in
    When I click on "My List"
    Then I should see my list
    When I click on the "New Wish" button
    Then the new wish input form should appear
    When I input test wish data into the form
    Then a the test wish should appear
    When I click the trash icon
    Then the test wish should disappear
    When I click the x
    Then the wish form should disappear
