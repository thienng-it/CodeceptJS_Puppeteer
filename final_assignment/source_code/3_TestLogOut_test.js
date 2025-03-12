Feature('TestLogOut');

Scenario('TC3 - Logout Successfully @test',  ({ I }) => {
    // Open the browser with the url "https://www.w3schools.com/"
    I.amOnPage('/');

    // Wait 3 seconds
    I.wait(3);

    // Then I will click the Login button on the right corner of the screen
    I.click("//a[@id='w3loginbtn']");

    // I wait 10 seconds to see the login form
    I.wait(10);

    // after that I will fill the form with the username and password
    I.fillField("//input[@name='email']", "joseph.testermail@gmail.com");
    I.wait(3);
    I.fillField("//input[@name='current-password']", "Admin@123");
    I.wait(3);

    // I will click the "Log in" button to see what's going on
    I.click("//button[@class='Button_button__URNp+ Button_primary__d2Jt3 Button_fullwidth__0HLEu']");
    I.wait(15);

    // I click the Menu button to see the "Log out" button
    I.click("//button[@aria-label='Menu']");
    I.wait(3);

    // Then I click the "Log out" button
    I.click("//button[@title='Log out']");
    I.wait(10);

    // I want to screenshot the login form that I have logged out recently
    I.saveScreenshot("LogOutSuccessfully.jpg");
    
    // I wait 3 seconds before closing the window
    I.wait(3);
}).tag("@test");
