@f2
Feature: Compose mail
  user wants to send email

  Background: user logs in to their profile
    Given user is at profile page

  @f2p @f2pblank
  Scenario Outline: verify blank mail can be sent
    When user clicks on profile menu
    And user clicks on inbox option
    And user clicks on compose icon
    And user inputs initials "<inits>" and selects recipient "<rcp>"
    And user inputs subject "<subject>"
    And user clicks on send mail
    Then mail sent successfully

    Examples: 
      | inits | rcp         | subject            |
      | amit  | amit luthra | Test mail new test |
      | ami   | amit xyz    | Test mail new test |
