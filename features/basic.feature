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

  @watch
  Scenario: Users Page
    Given I am signed in
    When I click on "Users"
    Then I should see the users list

  @watch
  Scenario: User's Page
    Given I am signed in
    When I click on "Users"
    Then I should see the users list
    When I click on "Felicity"
    Then I should see Felicity's wishlist

  @watch
  Scenario: Claim/Unclaim
    Given I am signed in
    When I click on "Users"
    Then I should see the users list
    When I click on "Felicity"
    Then I should see Felicity's wishlist
    When I click the first claim button
    Then the first wish should be claimed

  # @watch
  Scenario: Create User
    Given I navigate to the homepage
    Given I am not logged in
    When I click on the sign in button
