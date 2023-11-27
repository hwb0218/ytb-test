/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(css)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `.env.${process.env.NODE_ENV ?? 'local'}`),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
});

/*
entry: 빌드 시 의존성 그래프를 생성할 최초 진입점 설정, 이를 통해 모듈간의 의존 관계를 파악한다.
output: 빌드 결과물의 경로설정과 파일 이름
resolve: 모듈이 어떻게 해석될 지 웹팩에게 알려주는 설정 (extensions: import 구문에서 파일 확장자 생략 설정)
devServer: 웹팩의 빌드 파일이 변경 되었을 때 매번 웹팩 명령어를 실행하지 않아도 변경사항을 웹팩으로 빌드한 후 브라우저를 새로고침한다.
(statc: 정적 파일 서빙 경로 설정, compress: gzip 압축 설정,
빌드 결과물을 브라우저에게 전달하기 전에 gzip으로 압축하여 네트워크 전송 시간을 줄여 개발자의 개발 경험을 향상시키는데 도움, port: 개발 서버를 구동할 port를 설정)
module: 프로젝트 내의 다양한 파일 유형을 어떻게 처리할지 정의하는 규칙들(rules)을 설정하는 곳, 로더를 통해 특정 파일 유형들에 어떠한 변환을 할 지 설정한다.
plugin: 번들링 과정에 개입하여 사용자 정의 동작을 추가한다.
(clean-webpack-plugin: 이전 빌드 결과물이 남아있을 경우 제거 -> v5의 output clean이 기능을 대신함
HtmlWebpackPlugin: html 파일을 생성하여 번들링된 자바스크립트 파일을 바인딩)
*/
