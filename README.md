# REACT-native
1. ติดตั้ง  node.js 64bit
https://nodejs.org/en/download/
2. ติดตั้ง react-native

        npm install -g react-native-cli

        npm install -g exp

        npm install -g create-react-native-app (npm install -g create-react-native)

3. ย้อน version ของ npm
npm i -g npm@4

4. ทดลองสร้าง project ตาม getting start
https://facebook.github.io/react-native/docs/getting-started.html

npm install -g create-react-native-app
create-react-native-app MyApp
cd MyApp
npm start

เปิด App Expo บนมือถือมาสแกน

5. Install VSCode
6. เปิดไฟล์ App.js มาแก้ไข

my note
1. use same network
2. Vscode 3 ตัวแรกที่ช้วยในการเขียน
3. npm install --save react-navigation
3.1. ใช้ในการกดไปอีกหน้า


http://nextflow.in.th/2017/install-react-native-for-window-for-android-app-dev/



การเตรียม Environment เบื้องต้น
ในวันอบรมแรก เราใช้แค่
1. Node.js
2. react native (ตามหัวข้อที่ 3 ในบทความ)
3. โปรแกรม Expo (ติดตั้งบนมือถือมาด้วยเลย)
** ใครจะลงให้ครบตามบทความก็ได้

ส่วนของ Android สามารถลงตามบทความได้เลย แต่ถ้ายังไม่ได้ยังพอมีเวลา (ปล. การติดตั้งจะใช้เวลาค่อนข้างนาน)

ปล. ของใครที่ลงบน Windows แล้วติดปัญหาแจ้งเตือนตัว Watchman ให้ติดตั้งโปรแกรม watchman แยกต่างหากแล้วเซ็ตตัวแปร Environment ด้วย จาก link นี้
https://facebook.github.io/watchman/docs/install.html

บทความสอนวิธีติดตั้ง Environment ของ React Native
http://nextflow.in.th/2017/install-react-native-for-window-for-android-app-dev/

---------------------------------------------------------------------------------------------------------------------------------------
#WEEK 2
https://facebook.github.io/react-native/docs/getting-started.html
เตรียม Environment 
1. Android Studio + APIs 25
2. Genemotion + Image APIs 25 (Samsung GS7)
3. npm install -g react-native-cli
4. Change Region --> English
5. https://facebook.github.io/react-native/docs/getting-started.html  

#·ใช้ตัวนี้ช้วย ·Run
intstall mobx
npm i
npm install  mobx mobx-react --save

install babel-plugin
npm install babel-plugin-transform-decorators-legacy --save-dev
