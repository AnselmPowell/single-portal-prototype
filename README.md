# Sport Wales Portal - Frontend Prototype

This is a frontend prototype built to test a single sign-on (SSO) portal where users can access core Sport Wales services. This is a **beta** test built and not to be treated as a final Sport Wales product. [View the live deployed site](https://anselmpowell.github.io/single-portal-prototype/).

## Design

- [Original Wireframes in Figma](https://www.figma.com/file/TMNEWt8mlljlyOrwQ80acb/Wireframe-prototype-for-business-case-Discovery?type=design&node-id=1%3A6846&mode=design&t=IiXuUYJ9I5UhaS8g-1)
- [MVP user needs](https://www.figma.com/file/qv2eXEJTCUV92ngjrsWpqc/User-needs-%26-MVP-features?type=design&node-id=0%3A1&mode=design&t=1t5za32FDOWMOjhu-1)

## Dependencies
- **Bootstrap**: used for frontend layouts and components, accessed via CDN in the ```<head>``` of HTML files.
- **Nunjucks**: used for templating HTML, installed via node ```$ npm install nunjucks```, see [documentation on installation](https://github.com/AnselmPowell/single-portal-prototype/blob/main/docs/nunjucks.md) for further information.
- **easepick**: used for calendar picking on a form input, accessed via node ```$ npm install @easepick/bundle```.
