Feature: Users pages

  # @watch
  Scenario: Users Page
    Given I am signed in
    When I click on "Users"
    Then I should see the users list

  # @watch
  Scenario: User's Page
    Given I am signed in
    When I click on "Users"
    Then I should see the users list
    When I click on "Felicity"
    Then I should see Felicity's wishlist

  # @watch
  Scenario: Claim/Unclaim
    Given I am signed in
    When I click on "Users"
    Then I should see the users list
    When I click on "Felicity"
    Then I should see Felicity's wishlist
    When I click the first claim button
    Then the first wish should be claimed
    When I click the first unclaim button
    Then the first wish should be unclaimed


