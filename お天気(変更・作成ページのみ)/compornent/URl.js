const weatherURL = (domain) => (parameter) => domain + parameter;
const DomainURL = weatherURL(
  "https://www.jma.go.jp/bosai/forecast/data/forecast/"
);
export default DomainURL;
