## Information

<table>
<tr>
<td>Package</td><td>gulp-vuemaker</td>
</tr>
<tr>
<td>Description</td>
<td>Combine .html, .css, .styl and .js files into .vue components</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>
## Installation

```js
sudo npm install --save-dev gulp-stylus-vuemaker
```

or add next to your package.json

```js
  "devDependencies": {
    "gulp-stylus-vuemaker": "^1.0.2"
  }
```

and run

```js
sudo npm install
```

## Usage

```js
var vuemaker = require('gulp-vuemaker');

gulp.task('default', function() {
  return gulp.src('./lib/*.+(js|css|styl|html)')
    .pipe(vuemaker())
    .pipe(gulp.dest('./components/'));
});
```

This will make your .vue component files.



## RUSSIAN | Информация

<table>
<tr>
<td>Пакет</td><td>gulp-vuemaker</td>
</tr>
<tr>
<td>Описание</td>
<td>Объединение .html, .css, .styl и .js files в .vue компонент</td>
</tr>
<tr>
<td>Версия Node</td>
<td>>= 0.10</td>
</tr>
</table>

## Использование

```js
var vuemaker = require('gulp-vuemaker');

gulp.task('default', function() {
  return gulp.src('./lib/*.+(js|css|styl|html)')
    .pipe(vuemaker())
    .pipe(gulp.dest('./components/'));
});
```

Этот код соберет файлы в .vue компонент

## LICENSE

(MIT License)

Copyright (c) 2014 Layer7 <koen@layer7.be>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
