# Company Information Management Form

- This project has been hosted on <b>NodeJS server application</b>, you can access by clicking [this](https://company-information-management-form-bny8u47qd.now.sh/).
- The systemd design solution documented on [here]().

## The expected functionality are shown as below:

### Overview page

- The section titled “create company” should be able to create new company after
  filling in necessary information to the form and click the “Create” button. Moreover, necessary form validations are required, specifically,

1. Form cannot be submitted when any of input box is empty, and necessary
   required warning message (label or tooltip) should be shown for the invalid
   inputs.
2. Revenue input should be positive floor number.
3. Two fields of phone number should be both positive integer. Bonus if you can
   implement country code selection for the “code” input.

- The section titled “create office” should be able to create new office under selected
  company after filling in necessary information to the form and click the “Create”
  button. Moreover, necessary form validations are required, specifically,

1. Form cannot be submitted when any of input box is empty or unselected, and
   necessary required warning message (label or tooltip) should be shown for the
   invalid inputs.
2. Two input fields under location should be both positive float number.
3. Input “Office Start Date” should be able to pop up calendar for user to select
   the date instead of typing in the date string.

- When successfully creating a new company, proper notification message should be
  shown and new company information should appear in the section titled
  “Companies” as a new widget. Moreover, the form should be reset for further use.

- For each of the company widget under the section titled “Companies”,

1. It need to display the company profile information in the format shown in the
   overview page.
2. Each company widget is also clickable, which will redirect user to
   corresponding offices page.
3. When clicking the cross button on the top right corner, a pop up for
   confirmation need to be shown out and after confirming, the widget will be
   removed.

- If there is no company created in the overview page yet, message “there is no
  companies created yet” should be displayed in the “Companies” section.

### Offices page

- As the design above shown, company information as well as the information for
  each office need to be display accordingly. When a new office created in the
  overview page for one company, it needs to be automatically shown for the offices
  page of this company.

- For each office widget in section titled “offices”, when clicking the cross button on
  the top right corner, a pop up for confirmation need to be shown out and after
  confirming, the widget will be removed.

- If there is no office in the offices page yet, message “there is no office created yet”
  should be displayed in the “offices” section.

- When clicking the “Back to Overview” page, user will be redirect to the overview page.
