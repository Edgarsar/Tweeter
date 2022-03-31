# Tweeter Project

Tweeter is a single-page Twitter clone, where users can create short posts of up to 140 characters and have them append to the main page. Posts are sequential, with the most recent posts appearing at the top of the page. To do so, Tweeter fetches a list of posts from a simplified ‘server’ and allows users to add posts to this list dynamically. All the requests will be made asynchronously, which will allow us to gain familiarity using the jQuery library to make these requests.

## Final Product

!["screenshot of mobile view"](https://github.com/Edgarsar/Tweeter/blob/master/docs/mobile_view.png?raw=true)
!["screenshot of tablet view"](https://github.com/Edgarsar/Tweeter/blob/master/docs/tablet_view.png?raw=true)
!["screenshot of desktop view"](https://github.com/Edgarsar/Tweeter/blob/master/docs/desktop_view.png?raw=true)


## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5


## Getting Started

-Install dependencies using the `npm install` command.
-Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
-Go to <http://localhost:8080/> in your browser.
