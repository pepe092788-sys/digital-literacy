---
title: "公衆Wi‑Fi"
subtitle: "なぜ会社PCをフリーWi‑Fiにつながない方がいいの？"
description: "空港とホテルで実際に起きた事件から、公衆Wi‑Fiのリスクと、会社PCで接続先を選ぶ理由を学びます。"
sidebar:
  order: 20
---

出張先のカフェで、次の打ち合わせまでに会社のメールを確認したい。PCを開くと、Wi‑Fiの一覧に店名らしい名前が表示されています。店のWi‑Fiに見えますが、その名前だけで、誰が提供している回線かまで分かるのでしょうか。

カフェやホテル、空港などが利用者向けに提供するWi‑Fiを、**公衆Wi‑Fi（公衆無線LAN）**と呼びます。会社PCで利用を避ける理由を、実際に起きた二つの事件から見てみましょう。

## 空港では、Wi‑Fiそのものが偽物だった

2024年、オーストラリアの空港や国内線で、航空会社の無料Wi‑Fiを装った接続先が見つかりました。そこにつないだ利用者には、メールやSNSのアカウントでログインするよう求める画面が表示されました。入力されたログイン情報は犯人の機器に保存され、捜査で他人の認証情報が見つかりました。 [事件の報道（ABC News）](https://www.abc.net.au/news/2025-11-28/perth-michael-clapis-guilty-airport-data-theft-sex-videos/105442798)・[捜査結果の発表（The National Tribune掲載）](https://www.nationaltribune.com.au/wa-man-jailed-for-stealing-intimate-material-and-using-evil-twin-wifi-networks/)

この事件では、Wi‑Fiに接続した直後に表示される画面が、情報を盗む入り口でした。画面が本物に見えても、入力した情報はその画面を運営する相手に届きます。

## ホテルでは、本物のWi‑Fiの接続画面が悪用された

2014年に公表された「Darkhotel」事件では、攻撃者がホテルの正規のWi‑Fi接続ページを改ざんしました。出張中の企業幹部らに、普段使うソフトの更新を装った案内を表示したのです。案内に従ってインストールしたPCには悪意のあるプログラムが入り、ログイン情報やパスワードが盗まれたと報告されています。 [Kasperskyの調査報告（PDF）](https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08070903/darkhotel_kl_07.11.pdf)・[CERT Polskaの年次報告（PDF）](https://cert.pl/uploads/2015/11/Report_CP_2014.pdf)

空港では、偽の画面に入力した情報が相手に渡りました。ホテルでは、偽の更新を入れたことで、PCの中で情報を盗むプログラムが動きました。どちらも、ネットにつなぐときに見慣れた画面や案内が使われていました。

## なぜ会社PCでは接続先を選ぶのか

正規のサイトに **HTTPS** で接続すると、PCとそのサイトの間を流れる情報は暗号化されます。偽サイトにもHTTPSは使えるので、接続先のアドレスを確かめる意味があります。偽サイトにパスワードを入力すれば、暗号化された通信でも、情報はそのサイトの運営者に届きます。 [米国連邦取引委員会の公衆Wi‑Fi解説](https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know)

仕事用のアカウントが悪用されれば、そのアカウントで読める社内メールや顧客情報にも被害が及び得ます。冒頭のカフェで会社のメールを開くなら、会社が認めている接続方法を使います。たとえば、会社支給のスマホの回線をPCで使う**テザリング**や、会社指定のモバイルルーターです。 [総務省の公衆Wi‑Fi利用者向け資料](https://security-portal.cyber.go.jp/curriculum/torikumi/mic_wifi_man.html)・[IPAのテレワーク時の注意事項](https://www.ipa.go.jp/security/anshin/measures/telework.html)

## 今日のなるほど

Wi‑Fiの名前は、接続先を選ぶための手がかりです。その名前だけで、運営者や安全対策までは確かめられません。会社が接続方法を決めるのは、万一のときに、そのPCやアカウントで扱う業務情報まで被害が広がり得るからです。 [政府機関等のセキュリティ対策ガイドライン（PDF）](https://www.cyber.go.jp/pdf/policy/general/guider7.pdf)

## 知識を広げる

### 同じ階層で学ぶ

- [パスキー](../passkey/)

- [ランサムウェア](../ransomware/)

- [多要素認証](../../../level-1/security/multi-factor-authentication/)
- [ハードコード](../../../level-1/security/hardcoding/)
- [ネットワーク障害](../../../level-1/network/network-troubles/)
- [シャドーIT・シャドーAI](../shadow-it-ai/)
