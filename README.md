# Thursday_3th_koma_TeamC
先端ソフトウェア環境構築実践のチーム開発用レポジトリ

## アプリの起動方法(linux環境を想定, docker-composeを利用)
1. このREADME.md(正確にはdocker-compose.ymlファイル)があるディレクトリに移動する
2. sudo service docker start を実行してdockerデーモンを起動する
3. sudo docker-compose up -d を実行してdockerコンテナを作成&起動
4. Google Chrome等のブラウザで　http://localhost:3000/ にアクセス(Google Chrome以外未検証)
5. 成功していれば制作物であるオリンピックに関するサイトが表示される

## dockerイメージのURL
過去のバージョンも含めた全てのイメージは https://hub.docker.com/r/myasukura/team_c_app/tags より確認出来ます。<br>
最新バージョンのイメージのTAGは"4.0"で https://hub.docker.com/layers/myasukura/team_c_app/4.0/images/sha256-81422b802361ac59c77c96d68278b3becb8cfb7341868eabdfe62a34164c91d4?tab=layers より確認できます。
