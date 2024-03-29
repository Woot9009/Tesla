# Tesla 반응형웹
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jQuery&logoColor=white"/>

<br/><br/>

[Tesla 반응형웹 바로가기](https://woot9009.github.io/Tesla/)

- 웹, 태블릿, 모바일 사이즈에 맞게 레이아웃을 구성한 Tesla 테마의 메인페이지입니다.
- 웹 사이즈에서는 마우스이벤트, 플립, 지도 확대 등의 애니메이션을 적용했습니다.
- 태블릿과 모마일 사이즈에서는 애니메이션을 간소화하고 메뉴 및 아이콘의 배치를 사용환경에 맞게 재구성했습니다.

<br/><br/>
###### PC 웹
<img src="https://github.com/Woot9009/Tesla/assets/128044785/b6f3d5b4-450e-4993-917b-c6652f9836a8.png" width=50% height=auto/>

<br/><br/>
###### 태블릿
<img src="https://github.com/Woot9009/Tesla/assets/128044785/07400fd6-d426-40ce-a6f9-5a4d5c2615c5.png" width=50% height=auto/>

<br/><br/>
###### 모바일
<img src="https://github.com/Woot9009/Tesla/assets/128044785/916c5b2c-780a-4b03-97e0-0f7a8c9b093a.png" width=50% height=auto/>

<br/><br/>

### <만들며 어려웠던 점과 해결방법>
<br/>
❔: 커서를 동영상 영역에서 천천히 빼면 'Order Now'버튼이 원위치로 가지 않고 계속 마우스를 따라옴.<br/><br/>

❗: hover기능만 사용시 버튼자체가 동영상영역으로 인식되므로, 마우스좌표 if문을 추가해서 해결.
___

❔: 자동차 이미지의 플립효과가 경우에 따라 버벅임.

❗: 각각 따로 있던 앞뒤 영역을 하나의 div로 감싸서 해결.
___

❔: CyberTruck 이미지에 마우스오버시 제품 디테일 컷이 순차적으로 나와야 하는데 속도가 뒤죽박죽임.

❗: setInterval로 이미지를 순차적으로 띄우는 과정에서 에러발생. 버튼을 누를 때마다 이미지가 순차적으로 fadeIn, fadeOut되도록 함수를 만들고 그 함수를 trigger버튼 삼아 setInterval로 호출.
