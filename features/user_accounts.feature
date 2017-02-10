Feature: User Accounts

  # @watch
  Scenario: Sign-in
    Given I navigate to the homepage
    When I click on the sign in button
    When I enter my credentials
    Then I should be signed in

  # @watch
  Scenario: Incorrect Password
    Given I navigate to the homepage
    When I click on the sign in button
    When I enter my credentials with an incorrect password
    Then I should see an incorrect password error

  # @watch
  Scenario: Incorrect email
    Given I navigate to the homepage
    When I click on the sign in button
    When I enter my credentials with an incorrect email
    Then I should see an incorrect email error

  # @watch
  Scenario: Change Password
    Given I am signed in
    When I click on "Change Password"
    Then I should see the change password form
    When I enter new credentials
    And I click the update your password button
    And I sign out
    Then I should be able to log in with the new password

  # @TODO reinstate test after beta (when creating users is turned back on)
  # @watch
  Scenario: Create User
    Given I navigate to the homepage
    Given I am not logged in
    When I click on the sign in button
