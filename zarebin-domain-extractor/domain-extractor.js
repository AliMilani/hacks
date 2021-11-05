import fetch from "node-fetch";


const getJsonDataFromUrl = async (url) => {
  return await fetch(url).then((res) => res.json());
};

const exportDomainList = (json) => {
  return json.results.webs.map((result) => {
    return result.domain;
  });
};

const getJsonSearchResults = async (
  keyword,
  startPageNumber = 1,
  endPageNumber = 27,
  limit = 10
) => {
  let result = [];

  for (
    let pageNumber = startPageNumber;
    pageNumber <= endPageNumber;
    pageNumber++
  ) {
    let url = `https://zarebin.ir/api/?q=${keyword}&page=${pageNumber}&limit=${limit}`;
    result.push(
      await getJsonDataFromUrl(url)
        .catch((error) => {
          throw error;
        })
    );
  }
  return result;
};

// let keyword = "بازی";
let keyword = 'site:il inurl:/wp-content/ intext:iran' //.il(israel) wordpress website in text iran dork

const getDomainListByExtension = async (extension, ...args) => {
  return getJsonSearchResults(...args)
    .then((json) => json.map(json => (json.results.webs) ? exportDomainList(json) : null))
    .then(arrays => arrays.reduce((a, b) => a.concat(b), []))
    .then(domains => domains.filter(domain => (domain) ? domain.endsWith(`.${extension}`) : null))
    .then(irDomains => irDomains.join('\r\n'));
}


getDomainListByExtension('il', keyword, 1, 10)
  .then(domains => console.log(domains))