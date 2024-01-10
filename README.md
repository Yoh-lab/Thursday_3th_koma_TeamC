# Thursday_3th_koma_TeamC
先端ソフトウェア環境構築実践のチーム開発用レポジトリ

アプリの起動方法(linux環境を想定)
1. このREADME.mdがあるディレクトリに移動する
2. sudo service docker start を実行してdockerデーモンを起動する
3. docker-compose up -d を実行してdockerコンテナを作成&起動
4. Google Chrome等のブラウザで　http://localhost:3000/ にアクセス(Google Chrome以外未検証)
5. 成功していればオリンピックに関するサイトが表示される

dockerイメージのURL
https://hub.docker.com/r/myasukura/team_c_app より確認出来ます。