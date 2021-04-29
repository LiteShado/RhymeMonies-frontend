# RhymeMonies-frontend

## Goals

#### Providing user with the ability to be creative amongst a community of writers and artists by contributing to globally-created songs

#### User can create an account, add their lyrics to a pre-existing Community song, or start their own song.

#### User can also delete a song or view other songs.


# User Story

#### When I visit the website, I am asked if I want to sign up or log in.

#### When I sign up, I am asked my email address, name, password

#### When I am in my account, I am asked if I want to start a song or add to a Community song.

#### If I choose "add to Community", I am shown a list of songs that other community members have made.

#### Once I choose a Community song, I can see the lyrics that have alrady been posted by other users.

#### If I choose to add my lyrics, I am taken to a page where an input box is placed for me to add a line of lyrics.

#### Once I hit "add", I am taken back to the original song page that song my lyrics have been added to the site.

#### I now have the option of adding my own song, by clicking "add song".

#### I am asked for the lyrics and genre of the song I now want to create.

#### Once I add my lyrics and hit Next, I am taken to a page asking if I have a song title, and to confirm I want to add to Community.

#### Once I add a title and hit add, I am taken to the main homepage which now shows my new Contribution to the Community.


## HTTP Routes

* GET'/', user sign in
* POST'/user', user can sign up 
* GET'/user/song, user can access their songs
* PUT'/song/:id/edit', user can edit their song
* POST'/song/:id/add', user can add lyrics to a community song
* PUT'/user/:id/edit', user can edit their account
* POST'/song', user can add their own song
* GET '/song/all', user can see all songs
* DELETE '/song/:id/', user can delete their song
* DELETE '/user/:id/', user can delete their account
* GET'/logout', user can sign out of the account


## MVP

* New user can sign up and create a new account
* Pre-existing user can log in using their email and password
* Once logged in, a user can view Community songs or add a song to the community
* If a user adds lyrics, their lyrics should populate the global lyrics immediately
* If a user adds a song, their song should show on the homepage immediately
* User can edit, delete, or log out of their own account


## Stretch Goals

* User limited to one line of lyrics and only one contribution to any song under one account
* User can search Community songs by genre



