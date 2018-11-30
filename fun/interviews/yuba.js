// const Set = require("set");

function braces(values) {
  let parens = [];
  let res = [];
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    for (let j = 0; j < value.length; j++) {
      if (value[j] === "(") {
        parens.push(")");
      } else if (value[j] === "[") {
        parens.push("]");
      } else if (value[j] === "{") {
        parens.push("}");
      } else if (parens.length && value[j] === parens[parens.length - 1]) {
        parens.pop();
      } else {
        res.push("NO");
        parens = [];
        break;
      }
    }
    if (parens.length && res.length < i + 1) {
      res.push("NO");
      parens = [];
    } else if (!parens.length && res.length < i + 1) {
      res.push("YES");
      parens = [];
    }
  }
  return res;
}

function getMinimumDifference(a, b) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    let str1 = a[i];
    let str2 = b[i];
    if (str1.length !== str2.length) {
      res.push(-1);
      continue;
    }
    let strChars = {};
    for (let j = 0; j < str1.length; j++) {
      if (strChars[str1[j]] || strChars[str1[j]] <= 0) {
        strChars[str1[j]]++;
      } else {
        strChars[str1[j]] = 1;
      }
      if (strChars[str2[j]] || strChars[str2[j]] === 0) {
        strChars[str2[j]]--;
      } else {
        strChars[str2[j]] = -1;
      }
    }
    let count = 0;
    let chars = [...new Set(Object.keys(strChars))];
    console.log(chars);
    chars.forEach(char => {
      count += Math.abs(strChars[char]);
    });
    res.push(count / 2);
  }
  return res;
}

/*
 * Complete the 'degreeOfArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function degreeOfArray(arr) {
  // Write your code here
  if (!arr.length) return 0;
  let vals = {};
  let deg = 0;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (vals[el]) {
      vals[el][0]++;
      if (vals[el][0] > deg) {
        deg = vals[el][0];
      }
    } else {
      vals[el] = [1, arr.lastIndexOf(el) - i + 1];
    }
  }

  let minLen = arr.length + 1;

  Object.keys(vals).forEach(el => {
    if (vals[el][0] === deg) {
      if (vals[el][1] < minLen) {
        minLen = vals[el][1];
      }
    }
  });
  return minLen;
}

degreeOfArray([1, 2, 1, 3, 2]);

const https = require("https");
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */

function getMovieTitles(substr) {
  if (!substr || !substr.length) return null;
  let url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;
  getTotalPages(url, (err, totalPages) => {
    if (err) {
      console.log("error getting pages", err);
      // return;
    }
    let urls = [];
    for (let i = 1; i <= totalPages; i++) {
      urls.push(url + "&page=" + i);
    }
    getTitles(urls, (err, titles) => {
      if (err) {
        console.log("error getting titles");
        // return;
      }
      console.log(titles.sort());
      // return titles;
    });
  });
}

function getTitles(urls, callback) {
  let titles = [];
  let count = 0;
  for (let url of urls) {
    https
      .get(url, res => {
        count++;
        res.on("data", data => {
          // console.log(JSON.parse(data).data);
          let movies = JSON.parse(data).data;
          for (let movie of movies) {
            titles.push(movie.Title);
          }
          // console.log(titles);
          if (count === urls.length) {
            return callback(null, titles);
          }
        });
      })
      .on("error", err => {
        console.log(err);
        return callback(err, null);
      });
  }
}

function getTotalPages(url, callback) {
  https
    .get(url, res => {
      res.on("data", data => {
        // console.log(JSON.parse(data).total_pages);
        return callback(null, JSON.parse(data).total_pages);
      });
    })
    .on("error", err => {
      return callback(err, null);
    });
}

getMovieTitles("spiderman");
