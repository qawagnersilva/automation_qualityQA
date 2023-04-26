Feature: Login Test

    Scenario: Login with incorrect username and password
        Given I access the home page
        When I access the login page
        And I submit incorrect username and password
        Then should display an error message
