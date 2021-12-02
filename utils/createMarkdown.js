const generateBadges = badgeArr => {
  badgeArr = badgeArr.map(itemBadge => {
    if(itemBadge !== 'None') {
      return '![License](https://img.shields.io/static/v1?label=License&message=' + itemBadge + "&color=BLUE)"
    }
  })
  return badgeArr.join(" ")
}

const generateObjectLicense = objectLicense => {
  objectLicense =objectLicense.map(itemLicense => "* " + itemLicense)
  return objectLicense.join(" \n")
}

function createMarkdown(data) {
  const {title, description, license} = data;
  return `${generateBadges(license)}
# ${title}  

## Table of Contents
* [License](#license)


## Description 
${description}

## License
${generateObjectLicense(license)}

`
}

module.exports = createMarkdown;