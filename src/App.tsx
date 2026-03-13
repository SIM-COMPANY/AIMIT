import { useState } from 'react';

type Section = { heading?: string; paragraphs: string[] };
type Post = { id: number; title: string; period: string; excerpt: string; sections: Section[] };

const POSTS: Post[] = [
  {
    id: 1,
    title: '대형 면허를 땄는데 쓸 데가 없었다',
    period: '2019년',
    excerpt: '쉰다섯에 1종 대형 운전면허를 땄습니다. 막연하게 시골에서 마을버스나 몰면 어떨까 싶어서. 그리고 1년 동안 단 한 번도 쓰지 않았습니다.',
    sections: [
      { paragraphs: ['2019년 여름, 운전면허 학원에 등록했습니다.', '1종 대형. 버스를 몰 수 있는 면허입니다.', '당시에 제 나이 쉰다섯이었습니다. 강의로 먹고사는 금융컨설턴트였고요. 주변에서 물었습니다. 갑자기 왜?', '뚜렷한 이유가 없었습니다. 그냥 막연하게, 나중에 시골에서 마을버스나 몰면 어떨까 싶었습니다.', '계획이라기보다는 꿈에 가까웠습니다. 그것도 좀 흐릿한 꿈.'] },
      { heading: '3일 만에 땄습니다', paragraphs: ['학원에 등록하고 3일 만에 합격했습니다.', '면허증을 손에 쥐었을 때, 기분이 좋았습니다. 뭔가 준비하는 사람이 된 것 같았습니다.', '집에 와서 지갑에 넣었습니다.', '그리고 거기서 끝났습니다.', '1년 동안 그 면허를 쓸 일이 단 한 번도 없었습니다. 버스 기사가 뭘 준비해야 하는지도 몰랐고, 어디에 이력서를 내야 하는지도 몰랐습니다. 그냥 면허만 땄습니다.', '부끄럽지만 사실이 그렇습니다.'] },
      { heading: '귀촌 준비도 비슷했습니다', paragraphs: ['사실 2009년에 충남 청양에 땅을 사뒀습니다.', '경매로 낙찰받은 거였는데, 당시엔 "나중에 거기 가서 살면 되겠지" 했습니다. 10년이 지나도 집을 짓지 않았습니다.', '땅만 있고 계획은 없었습니다.', '이렇게 말하면 무계획하게 보일 수 있는데, 솔직히 그랬습니다. 은퇴 후 삶을 진지하게 생각한 게 아니라, 그냥 막연하게 "어떻게 되겠지"였습니다.', '그게 저의 2019년이었습니다.'] },
      { heading: '그래도 움직이긴 했습니다', paragraphs: ['근데 이상한 게 있습니다.', '그 막연한 시절이 나중에 다 연결됩니다.', '대형 면허를 땄기 때문에 나중에 버스 기사 쪽을 알아봤고, 그러다 채용 시장의 현실을 알게 됐습니다. 청양 땅이 있었기 때문에 5도2촌을 현실로 만들 수 있었습니다.', '막연해도 움직이면 뭔가가 남습니다.', '아무것도 안 하는 것보다는 낫습니다. 확실히.'] },
      { heading: '솔직하게 씁니다', paragraphs: ['이 시리즈는 잘 됐다는 이야기가 아닙니다.', '저 조경만, 엉클조가 55세부터 60세까지 뭘 하려다 실패하고, 또 뭘 해보다 됐는지 그냥 있는 그대로 씁니다.', '자격증 3개를 따도 취업이 안 됐던 이야기, 60세에 야간 교대 근무를 했던 이야기, 20살 어린 사수한테 구박받으며 킥보드 수리를 배웠던 이야기.', '창피한 것도 씁니다. 왜냐면 그게 진짜니까요.', '은퇴를 앞두고 막막한 분들, 재취업이 안 된다고 지쳐있는 분들. 제 이야기가 조금이라도 "나도 해볼 수 있겠다"는 생각이 들게 해드리고 싶습니다.', '저도 됐습니다. 당신도 됩니다.'] },
    ],
  },
  {
    id: 2,
    title: '강의가 다 취소됐을 때 저는 TV만 봤습니다',
    period: '2020년',
    excerpt: '2020년 초, 전화가 하루에 서너 통씩 왔습니다. 100여 개의 강의가 전부 취소됐습니다. 수입이 100에서 0이 됐습니다. 저는 두 달 동안 TV만 봤습니다.',
    sections: [
      { paragraphs: ['2020년 초, 전화가 하루에 서너 통씩 왔습니다.', '"선생님, 죄송한데요. 강의가 어렵게 됐습니다."', '한 달도 안 됐는데 100여 개의 강의가 전부 취소됐습니다.', '수입이 줄어든 게 아니었습니다. 100에서 0이 됐습니다.'] },
      { heading: '처음 두 달은 TV만 봤습니다', paragraphs: ['제가 용감하게 바로 일어섰다고 쓰면 거짓말입니다.', '그냥 멍했습니다.', '강의 30년 했는데, 이런 상황은 처음이었습니다. 갑자기 아무도 저를 부르지 않았습니다. 매일 할 일이 없어졌습니다.', '밥 먹고, TV 보고, 또 밥 먹고, 또 TV 봤습니다.', '밖에도 잘 안 나갔습니다. 거리두기도 있었고, 솔직히 나갈 의욕도 없었습니다.', '두 달 정도 그랬습니다. 창피하지만 사실이 그렇습니다.'] },
      { heading: '언제부터 달라졌냐면요', paragraphs: ['2020년 12월이었습니다. 거리두기가 더 강화됐습니다.', '이상하게도 그때 생각이 딱 바뀌었습니다.', '아, 이게 끝날 문제가 아니구나.', '처음에는 "한 달이면 끝나겠지" 했는데, 1년이 됐습니다. 끝이 안 보였습니다. 강의가 다시 돌아온다고 해도 예전처럼 100개가 될 보장이 없었습니다.', '기다리면 안 되겠다 싶었습니다.', '그래서 고용센터에 갔습니다. 내일배움카드를 발급받으러.'] },
      { heading: '창구에 앉았을 때 솔직히 좀 창피했습니다', paragraphs: ['담당자가 제 나이를 보더니 아무 말 없이 서류를 내밀었습니다.', '"이 나이에 뭘 배우러 오셨어요?"', '그 말은 안 했지만, 표정에서 읽혔습니다.', '속으로 좀 민망했습니다. 남한테 강의하던 사람이 직업 훈련 신청하러 왔으니까요.', '그래도 그냥 서류 적었습니다.', '창피함보다 막막함이 더 컸습니다. 이대로 있으면 안 된다는 게 더 컸습니다.'] },
      { heading: '위기가 기회라는 말, 반은 맞고 반은 틀립니다', paragraphs: ['그런 말 많이 들으셨죠? "위기를 기회로."', '저도 강의에서 그 말 많이 했습니다.', '근데 당하고 나서 알았습니다. 그 말이 맞긴 한데, 순서가 있습니다.', '먼저 충분히 무너져야 합니다.', '무너지지도 않았는데 "기회로 삼자!" 하면 억지입니다. 저는 두 달 무너졌습니다. 충분히 힘들었습니다. 그러고 나서 움직였습니다.', '그게 자연스러운 순서였습니다.', '무너지고 있는 중이시라면, 이상한 게 아닙니다. 그 시간이 필요한 겁니다.', '저도 그랬습니다.'] },
    ],
  },
  {
    id: 3,
    title: '자격증 3개를 따고 취업박람회에 갔는데 아무도 저를 안 불렀습니다',
    period: '2021년',
    excerpt: '지게차, 굴착기, 전기기능사. 자격증을 따면 취업이 될 거라고 생각했습니다. "다른 분으로 결정됐습니다"라는 문자를 몇 번 받았는지 모릅니다.',
    sections: [
      { paragraphs: ['2021년 2월, 지게차 운전기능사 시험을 신청했습니다.', '당시 제 생각은 단순했습니다. 자격증을 따면 취업이 될 거다.', '지게차를 따고, 굴착기까지 땄습니다. 한 달 만에 두 개.', '나름 자신 있었습니다. "이 정도면 어딘가에서 쓰겠지."', '이력서를 넣기 시작했습니다.', '결과는 전부 탈락이었습니다.'] },
      { heading: '면접 연락이 한 통도 안 왔습니다', paragraphs: ['버스 회사에 냈습니다. 탈락.', '중장비 업체에 냈습니다. 탈락.', '취업박람회에 직접 가서 이력서를 손으로 건넸습니다. 그래도 연락이 없었습니다.', '"다른 분으로 결정됐습니다."', '이 문자를 몇 번 받았는지 모릅니다.'] },
      { heading: '나중에야 이유를 알았습니다', paragraphs: ['버스 회사는 대형 면허 경력이 없으면 잘 안 뽑습니다. 안전 문제 때문에요.', '지게차, 굴착기도 마찬가지입니다. 자격증만 있고 현장 경력이 없으면 "사고 날 수 있다"고 봅니다.', '당연한 얘기인데, 그때는 몰랐습니다.', '55~74세 퇴사자 중에 1년 안에 정규직으로 재취업하는 비율이 9%라는 통계가 있습니다. 저도 나중에 알았습니다. 진작 알았으면 접근을 달리 했을 텐데.', '자격증이 문을 열어주는 게 아니었습니다. 문을 두드릴 자격을 주는 것뿐이었습니다. 그것도 맞는 문을 두드려야 했습니다.', '저는 맞지 않는 문을 계속 두드리고 있었던 겁니다.'] },
      { heading: '화는 났지만 포기는 안 했습니다', paragraphs: ['탈락이 반복되면 두 가지를 하게 됩니다. 포기하거나 방향을 바꾸거나.', '저는 포기하기엔 선택지가 없었습니다.', '화가 났습니다. 근데 그 화가 도움이 됐습니다. 포기 쪽으로 가지 않게 해줬습니다.', '어떤 분야가 나 같은 사람을 뽑을까?', '조건 세 가지를 잡았습니다.', '법적으로 자격증 보유자를 채용해야 하는 곳. 교대 근무가 있어서 남들이 꺼리는 시간대. 구인 수요가 충분히 많은 곳.', '이 세 가지가 다 맞는 분야가 전기시설 관리였습니다.'] },
      { heading: '상경계 출신이 전기를 배웁니다', paragraphs: ['교재를 처음 폈을 때 외계어 같았습니다.', '저는 대학에서 경영을 공부했습니다. 회로도 같은 건 본 적이 없었습니다.', '내일배움카드로 전기기능사 과정을 등록했습니다.', '솔직히 힘들었습니다. 이론 시험에서 한 번 떨어졌습니다. 50대 중반의 머리가 20대처럼 빠르지 않다는 걸 새삼 느꼈습니다.', '그래도 다시 봤습니다.', '2021년 12월 24일, 크리스마스 이브에 합격 통보를 받았습니다.', '혼자 웃었습니다. 아무도 없는 방에서.'] },
      { heading: '자격증보다 먼저 해야 하는 것', paragraphs: ['지금 자격증 공부하시는 분들께 한 가지만 드리고 싶습니다.', '공부 시작하기 전에 먼저 확인하세요.', '이 자격증으로 어디에 취업하려는 건지. 그곳이 나를 필요로 하는지.', '저는 지게차, 굴착기를 따고 나서야 알았습니다. 맞는 순서가 아니었습니다.', '틀린 순서로 했어도 결국 방향을 찾았으니 다행이지만, 시간이 아까웠습니다.'] },
    ],
  },
  {
    id: 4,
    title: '60세에 야간 근무를 했습니다',
    period: '2022년',
    excerpt: '2022년 3월, 쿠팡 물류센터 출근 첫날. 30년 넘게 강단에 섰던 사람이 가로 400m, 세로 200m 창고에 서 있었습니다.',
    sections: [
      { paragraphs: ['2022년 3월, 출근 첫날.', '안성에 있는 쿠팡 물류센터였습니다. 가로 400m, 세로 200m짜리 거대한 창고.', '들어서면서 솔직히 멍했습니다.', '내가 30년 넘게 강단에 섰는데, 지금 여기 서 있구나.', "근무 패턴은 '주주야야비비'입니다. 이틀 주간, 이틀 야간, 이틀 휴무. 사이클이 계속 돕니다. 주말이 없습니다.", '처음에 그게 제일 낯설었습니다. 일요일에 야간 근무를 하고 있었습니다.'] },
      { heading: '어떻게 취업이 됐냐면요', paragraphs: ['몇 달을 더 기다렸습니다. 이력서 넣고 또 넣었습니다.', '그러다 연락이 왔습니다. 물류센터 시설팀에서 전기시설 관리로 와보겠냐고.', '정규직이라고 했습니다.', '전화 끊고 잠깐 그냥 멍하게 있었습니다. 담당자가 "여보세요?" 할 때까지.', '60세에 정규직 취업이라고 생각하니 이상했습니다. 기분 좋은 의미로.'] },
      { heading: '팀원이 다 저랑 비슷한 나이였습니다', paragraphs: ['팀에 10명이 있었는데, 전부 비슷한 연령대였습니다.', '그중에 저처럼 재취업한 분들도 있었습니다. 퇴직하고 몇 년 쉬다 온 분, 전혀 다른 업종에서 온 분.', '다들 어떻게든 찾아온 사람들이었습니다.', '그게 위안이 됐습니다. 나만 이상한 게 아니구나. 다들 비슷하게 여기까지 왔구나.'] },
      { heading: '처음 한 달은 다리가 너무 아팠습니다', paragraphs: ['하루에 1만 보 이상은 기본이었습니다.', '넓은 창고를 이리저리 돌아다니면서 전기, 기계, 시설을 점검하고 고칩니다. 앉아서 하는 일이 거의 없습니다.', '30년을 앉아서 강의했던 몸이 적응하려니 시간이 걸렸습니다. 퇴근하면 다리가 퉁퉁 부었습니다.', '그런데 한 달이 지나자 달라졌습니다.', '뱃살이 빠졌습니다. 다리에 근육이 붙었습니다. 자고 나면 개운했습니다.'] },
      { heading: '기계를 고치는 일의 다른 맛', paragraphs: ['강의는 말하는 일입니다. 설득하고, 설명하고, 에너지를 씁니다.', '시설 관리는 달랐습니다. 말보다 손이 먼저입니다. 고장 난 걸 찾아서 고치면 바로 결과가 나옵니다.', '기계가 다시 돌아갈 때 느낌이 좋았습니다. 의외로.', '오늘 내가 한 일이 눈에 보였습니다. 강의에서 오는 만족감과는 다른 종류였습니다.', '어느 게 더 낫다는 게 아닙니다. 그냥 달랐습니다. 그리고 그것도 좋았습니다.'] },
      { heading: '야간이 제일 힘들었습니다', paragraphs: ['솔직히 야간 근무는 힘들었습니다.', '저녁 6시 출근, 새벽 6시 퇴근. 몸이 밤에 자도록 되어 있는데 거기에 역행하는 겁니다.', '나이 들수록 야간이 힘들다는 말이 있는데, 맞습니다.', '팀원들이 같이 힘들어하니까 버텼습니다. 혼자였으면 더 힘들었을 겁니다.'] },
      { heading: '1년 1개월 만에 그만뒀습니다', paragraphs: ['2023년 5월, 퇴사했습니다.', '코로나가 끝나면서 강의 요청이 다시 들어왔습니다. 물류센터 일과 강의 두 개를 같이 할 수 없었습니다.', '본업인 강의를 선택했습니다.', '그 1년 1개월이 아깝지 않았습니다.', '60세에도 정규직이 된다는 걸 제 몸으로 했습니다. 현장 일의 다른 맛을 알았습니다. 건강도 좋아졌습니다.', '그리고 지금 이 이야기를 씁니다. 해봤으니까 할 수 있는 이야기입니다.'] },
    ],
  },
  {
    id: 5,
    title: '20살 어린 사수한테 구박받으며 킥보드를 배웠습니다',
    period: '2023~2025년',
    excerpt: '2024년 초, 전동 킥보드 수리 알바를 시작했습니다. 광고를 보고 그냥 지원했습니다. 사수가 20살 어렸습니다. 처음엔 구박도 받았습니다. 그래도 배웠습니다.',
    sections: [
      { paragraphs: ['2024년 초, 전동 킥보드 수리 알바를 시작했습니다.', '광고를 보고 그냥 지원했습니다. 특별한 이유가 없었습니다. 해보고 싶었습니다.', '사수가 20살 어렸습니다.', '처음에 구박을 받았습니다. 말로 하진 않았지만, "이 아저씨 이것도 모르나" 하는 시선이 느껴졌습니다.', '좀 창피했습니다.', '그래도 배웠습니다.'] },
      { heading: '고장 난 킥보드가 다시 달려나갈 때', paragraphs: ['기계를 고쳐서 다시 움직이게 하는 게 이렇게 재밌는 줄 몰랐습니다.', '고장 난 걸 분해하고, 부품을 갈고, 조립하고, 시동을 켜면 달려나갑니다.', '그 순간마다 괜히 기분이 좋았습니다. 의사가 환자를 낫게 했을 때 이런 기분일까 싶었습니다. 과장이 좀 있지만, 그 느낌이 맞습니다.'] },
      { heading: '지금 제 일주일', paragraphs: ['솔직히 지금 생활이 제일 마음에 듭니다.', '충남 청양에 집을 지었습니다. 2009년에 경매로 샀던 그 땅입니다. 14년 만에 집이 생겼습니다.', '주중 3일은 서울·수도권에서 강의하고 코칭합니다. 주중 2일은 청양에서 텃밭 가꾸고 닭 봅니다. 나머지 2일은 쉬거나 온라인 작업합니다.', '5도2촌이라고 합니다.', '처음 막연하게 꿈꾸던 귀촌이 이런 모양이 됐습니다. 완전히 시골로 가는 게 아니라, 도시와 시골을 왔다 갔다 하는 방식으로.', '이게 저한테 더 맞았습니다.'] },
      { heading: '다음에는 이걸 해볼 겁니다', paragraphs: ['멈출 생각이 없습니다.', '손해평가사 자격증 공부를 시작했습니다. 농작물 피해를 평가하는 전문직입니다. 청양에서 농사와도 연결됩니다.', '공조냉동기계기능사도 준비하고 있습니다.', '70대까지 일하는 게 목표입니다.', '거창한 계획이 아닙니다. 그냥 계속 뭔가를 배우고 싶습니다.'] },
      { heading: '5년을 돌아보면', paragraphs: ['2019년에 대형 면허를 딴 날부터 지금까지.', '잘못된 것도 많았습니다. 지게차·굴착기를 먼저 따지 말고 전기부터 했으면 시간을 아꼈을 겁니다. 처음부터 취업 시장을 분석했으면 탈락을 덜 겪었을 겁니다.', '그래도 후회는 없습니다.', '탈락이 반복됐기 때문에 전략을 바꿨습니다. 전략을 바꿨기 때문에 정규직 취업이 됐습니다. 물류센터를 경험했기 때문에 지금의 생활 방식을 꿈꿀 수 있었습니다.', '좌충우돌이 경로였습니다. 곧은 길이 아니었을 뿐, 길이긴 했습니다.'] },
      { heading: '마지막으로', paragraphs: ['이 시리즈를 쓰면서 목표가 하나 있었습니다.', '은퇴가 두렵거나, 재취업이 안 된다고 지쳐있거나, 자격증은 땄는데 갈 곳이 없는 분들한테. 그냥 이런 아저씨도 있다는 걸 보여주고 싶었습니다.', '멋진 성공 스토리가 아닙니다.', '두 달 TV만 봤고, 자격증 3개 따도 서류에서 다 탈락했고, 60세에 야간 근무 했고, 20살 어린 사수한테 구박받으며 킥보드 수리 배운 아저씨 이야기입니다.', '그 아저씨가 지금은 청양에 집 짓고 강의도 하고 텃밭도 가꿉니다.', '저도 됐습니다. 당신도 됩니다.'] },
    ],
  },
];

type Column = { id: number; num: string; title: string; date: string; url: string; excerpt: string; sections: Section[] };

const COLUMNS: Column[] = [
  {
    id: 101, num: '➊', title: '나는 얼마 전에 버스운전면허를 땄다',
    date: '2021년 5월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=50540',
    excerpt: '"은퇴 후 뭐 하고 살 거야?" 막상 은퇴하면 3개월이면 그 삶이 지겨워집니다. 버스운전면허를 따면서 시작된 은퇴 설계 이야기.',
    sections: [
      { paragraphs: ['"은퇴하면 난 무조건 놀 거야." 은퇴를 앞둔 이들이 늘 하는 말입니다. 하지만 막상 은퇴를 하면 3개월에서 1년 안에 여유로운 은퇴생활이 지겨워지는 경우가 대부분입니다.', '주말이 달콤한 건 바쁜 5일이 있기 때문입니다. 휴가가 계속되면 더 이상 휴가로서의 의미가 없어집니다.'] },
      { heading: '은퇴 후 시간 계획을 세워야', paragraphs: ['은퇴를 준비하는 첫 단계에서 자신에게 물어보세요. "원하는 은퇴를 하면 매일 무엇을 하고 살 것인가?" 일주일, 한달, 1년의 시간 계획을 세워보는 것이 좋습니다.', '사람은 아침에 눈을 떠 해야 하는 일이 있어야 합니다. 그리고 그 일이 기다려질 때 가장 행복합니다.'] },
      { heading: '필자의 5도2촌 계획', paragraphs: ['60세가 된 필자도 은퇴 후 삶을 늘 고민합니다. 4도3촌 또는 5도2촌을 계획하고 있습니다. 4~5일은 도시, 2~3일은 시골에서 지내는 삶입니다.', '버스운전면허도 혹시 모를 변화에 대비해 취득했습니다. 은퇴 준비는 노후 자금을 모으는 것만이 아닙니다. 인생은 "누구와 어디서 무엇을 할 때 행복할까"라는 질문에 답을 찾는 과정입니다.'] },
    ],
  },
  {
    id: 102, num: '➋', title: '회사에 쏟는 충성의 2할만 아낀다면…',
    date: '2021년 7월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=51127',
    excerpt: '재취업에 성공해도 평균 19개월 만에 다시 퇴직합니다. 직장을 다닐 때 미래를 준비해야 하는 이유.',
    sections: [
      { paragraphs: ['50대 중후반의 퇴직은 이제 자연스러운 현실입니다. 퇴직자의 83%가 재취업에 성공했지만, 평균 19개월 만에 다시 퇴직하게 됩니다. 경력과 인맥도 후배 퇴직자들에게 밀려 5년을 버티기 어렵습니다.'] },
      { heading: '자격증만으로는 부족합니다', paragraphs: ['버스운전면허, 화물차, 건축 기술을 배웠지만 1~2년 이상의 경력을 요구하는 곳에서는 번번이 탈락했습니다. "기회가 있을 때 관련 아르바이트라도 했더라면"이라는 후회가 부쩍 듭니다.'] },
      { heading: '지금 직장에 있을 때 준비해야', paragraphs: ['장래가 괜찮아 보이는 분야의 자격증을 적어도 2개 취득해 두세요. 회사에 쏟는 충성의 20~30%만 투자하면 됩니다. 주말을 이용해 프리랜서로 경험을 쌓으면 은퇴할 때쯤 어디에 내놓아도 부끄럽지 않은 경력이 됩니다.', '지금은 50세 전후에 은퇴해 90세까지 살아야 하는 고령화 사회입니다. 은퇴 후가 아닌, 지금 직장에 있을 때 준비하는 것이 생존 전략입니다.'] },
    ],
  },
  {
    id: 103, num: '➌', title: '제발 알바부터 해보세요!',
    date: '2021년 9월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=51525',
    excerpt: '은퇴 후 창업하려는 분들에게. 창업자 10명 중 8명은 준비 교육 없이 시작합니다. 창업 전에 알아야 할 3가지 조언.',
    sections: [
      { paragraphs: ['금융권 명예퇴직 후 3억원으로 브런치 카페를 창업했다가 3년 만에 문을 닫은 경우가 있습니다. 결국 8,000만원만 남았습니다. 창업 후 3년 이내 폐업하는 기업이 60%를 넘으며, 창업 전 교육을 받은 창업자는 18.8%에 불과합니다.'] },
      { heading: '창업 전 3가지 조언', paragraphs: ['첫째, 바닥부터 다시 배운다는 자세로 시작하세요. 아무리 잘나갔어도 그건 창업 전 이야기입니다.', '둘째, 보수적으로 접근하세요. 발생 가능한 모든 리스크를 먼저 점검해야 합니다.', '셋째, 먼저 경험을 쌓으세요. 창업하려는 업종에서 알바부터 해보세요. 창피해할 필요 없습니다. 망하는 것보다는 훨씬 낫습니다. 최소 100시간 이상의 창업 교육도 받으세요.'] },
    ],
  },
  {
    id: 104, num: '➍', title: '"시골 결사반대" 아내 설득하는 법',
    date: '2021년 11월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=52061',
    excerpt: '귀촌자의 19.9%가 가족 반대로 혼자 이주했습니다. 10년에 걸쳐 아내를 설득한 전략을 공유합니다.',
    sections: [
      { paragraphs: ['은퇴 후 시골살이의 최대 장애물은 아내의 반대입니다. 귀촌 가구 중 11.2%, 귀농 가구 중 19.9%가 가족의 반대 때문에 혼자 시골로 내려갔습니다.'] },
      { heading: '가랑비에 옷 젖는 전략', paragraphs: ['처음 2년은 여름휴가를 핑계로 시골을 방문했습니다. 다음 2~3년은 주말농장 명목으로 함께 텃밭을 가꿨습니다. 벌레를 보고 기겁하던 아내가 어느새 "언제 시골집에 가냐"고 먼저 묻게 됐습니다.'] },
      { heading: '단계별 접근법', paragraphs: ['1단계: 작은 집을 구해 별장처럼 월 1회 방문. 2단계: 직접 채소를 키워 수확의 기쁨을 경험. 3단계: 진지한 대화로 각자의 생각을 조율. 4단계: 5년 단위로 구체적인 시골 이주 계획 수립.', '시골살이를 반대하는 아내를 설득하는 데는 10년 정도의 시간이 필요합니다.'] },
    ],
  },
  {
    id: 105, num: '➎', title: "귀농 꿈꾸는 당신, '시골형 인간'인가요?",
    date: '2022년 1월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=53070',
    excerpt: '도시인 10명 중 4명이 귀농·귀촌을 꿈꿉니다. 하지만 누구나 할 수 있는 건 아닙니다. 먼저 자신의 성향을 확인해야 합니다.',
    sections: [
      { paragraphs: ['한국농촌경제연구원 조사에 따르면 도시 거주자의 41.3%가 귀농·귀촌 의향이 있다고 답했습니다. 하지만 귀농·귀촌은 누구나 할 수 있는 일이 아닙니다.'] },
      { heading: '시골살이를 막는 현실', paragraphs: ['심근경색 같은 지병이 있다면 시골의 부족한 의료시설이 큰 문제가 됩니다. 대중교통이 불편해 병원 방문에 하루를 소비하기도 합니다.', '도시의 편의시설에 익숙한 사람이라면 집 수리, 음식 준비, 텃밭 관리 등 모든 것을 직접 해야 하는 시골 생활이 부담스러울 수 있습니다.'] },
      { heading: '가장 현명한 선택', paragraphs: ['오도이촌(5일 도시, 2일 시골) 또는 사도삼촌(4일 도시, 3일 시골) 같은 중간 형태가 가장 무난합니다.', '결국 행복한 은퇴의 핵심은 "나는 어디서, 누구와, 무엇을 하며 하루를 보낼 때 가장 행복한가"라는 질문에 정직하게 답하는 것입니다.'] },
    ],
  },
  {
    id: 106, num: '➏', title: '독자의 댓글에 보내는 엉클조의 답장',
    date: '2022년 3월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=53379',
    excerpt: '9개월간 받은 독자 댓글에 답합니다. 취업, 귀촌, 시골 인심에 대한 오해와 진실.',
    sections: [
      { heading: '취업이 어렵다는 댓글에 대해', paragraphs: ['필자도 버스운전면허, 굴삭기, 지게차, 전기기능사 자격증을 취득했지만 경력 부족으로 취업에 실패했습니다. 공감합니다. 그래도 포기하면 안 됩니다. 대도시 경쟁이 어렵다면 지방으로 눈을 돌려야 합니다.'] },
      { heading: '혼자 귀촌하겠다는 댓글에 대해', paragraphs: ['50~60대 남성들은 새로운 사람을 사귀기 어렵습니다. 낯선 시골에서 혼자라면 더 어렵습니다. 서로 잘 아는 배우자와 함께하면 적응이 훨씬 쉽습니다.'] },
      { heading: '시골 인심이 사납다는 댓글에 대해', paragraphs: ['귀촌인 중 지역주민과 관계가 좋다는 응답이 51.4%, 나쁘다는 응답은 1.9%에 불과합니다. 대부분의 텃세는 소통 부재가 만들어낸 오해입니다.', '마을 주민에게 "어느 집에 이사 와서 지내는 누구입니다. 잘 부탁드립니다" 한마디면 충분합니다.'] },
    ],
  },
  {
    id: 107, num: '➐', title: '금융회사는 왜 공포를 파는가',
    date: '2022년 5월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=53818',
    excerpt: '금융회사들의 공포 마케팅 때문에 은퇴 준비가 돈 문제에만 집중됩니다. 하지만 실제 은퇴자들이 가장 후회하는 것은 건강 관리였습니다.',
    sections: [
      { paragraphs: ['"은퇴"라고 하면 십중팔구 노후자금을 떠올립니다. 하지만 돈이 아무리 많아도 건강이 없으면 무용지물입니다. 그림 같은 전원주택을 지었어도 병원을 들락거린다면 아무런 의미가 없습니다.'] },
      { heading: '실제 은퇴자가 후회하는 것', paragraphs: ['일본 은퇴자들이 가장 후회하는 것: 저축, 치아관리, 취미 만들기. 국내 보험사 조사에서도 "체력단련을 못한 것"이 "노후자금 부족"보다 더 높은 후회 순위에 올랐습니다.'] },
      { heading: '은퇴설계의 중심은 건강', paragraphs: ['은퇴설계의 중심은 돈이 아닌 행복한 삶입니다. 그러기 위해서는 건강이 첫 번째 요소입니다. 금융회사의 공포 마케팅에 흔들리지 않는 것이 진정한 은퇴 설계의 시작점입니다.'] },
    ],
  },
  {
    id: 108, num: '➑', title: '"내가 누군데 이장 따위가…" 오만과 큰코',
    date: '2022년 7월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=54119',
    excerpt: '시골에서 이장은 소통령입니다. "내가 도시에서 잘나가던 사람인데"라는 생각이 시골살이를 망치는 첫 번째 원인입니다.',
    sections: [
      { heading: '이장은 소통령입니다', paragraphs: ['시골마을 이장은 공무원이 아닙니다. 하지만 주민 총회 만장일치로 선출되는 만큼 영향력이 큽니다. 비닐하우스 지원금, 농지원부 신청, 퇴비·모종 공동구매 등 시골살이의 경제적 혜택이 이장을 통해 연결됩니다.'] },
      { heading: '오만이 불러온 결과', paragraphs: ['전원주택 진입로 문제를 해결하려면서 이장의 협조를 구하지 않고 집주인에게 일방적으로 통보한 사례가 있습니다. 결국 전원주택 계획 자체를 접어야 했습니다.', '"내가 도시에서 잘나가던 사람인데 이장 따위가…"라는 생각을 버리는 것이 행복한 시골살이의 첫걸음입니다.'] },
      { heading: '인사가 최고의 방법', paragraphs: ['마을에서 만난 주민에게 인사만 잘해도 됩니다. "어느 집에 이사 와서 지내고 있는 누구인데 잘 부탁드린다"는 한마디면 충분합니다.'] },
    ],
  },
  {
    id: 109, num: '➒', title: '60세 된 나의 정규직 재취업 일지',
    date: '2022년 9월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=54326',
    excerpt: '55~74세 퇴사자 중 1년 내 정규직 재취업 비율은 9%. 2년의 좌충우돌 끝에 물류센터 정규직에 취업한 과정을 공유합니다.',
    sections: [
      { paragraphs: ['올해로 60살이 된 필자는 최근 재취업에 성공했습니다. 지난해 은퇴편지를 쓰기 전부터 준비했으니 2년이나 걸렸습니다.'] },
      { heading: '재취업은 험했습니다', paragraphs: ['버스, 화물트럭, 지게차, 굴삭기 자격증을 땄지만 경력이 없다는 이유로 번번이 탈락했습니다. 면접 연락조차 오지 않았습니다.', '55~74세 퇴사자 중 1년 내 정규직 재취업 비율은 9%, 5년 내 재취업 실패율은 32.4%입니다.'] },
      { heading: '전략의 전환이 성공의 열쇠', paragraphs: ['남들이 꺼리는 주주야야비비 근무시간대를 노리기로 했습니다. 전기기능사 자격증을 추가로 취득한 후 물류센터 시설팀에서 정규직 연락이 왔습니다.', '매일 해야 할 일이 있다는 사실이 심리적으로 큰 힘이 됩니다. 60세에도 정규직 재취업이 가능합니다.'] },
    ],
  },
  {
    id: 110, num: '➓', title: '시골에 집부터 짓겠다는 분들께',
    date: '2022년 11월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=54763',
    excerpt: '귀농을 계획하고 집부터 마련하려는 분들에게. 먼저 생활부터 시작해야 하는 이유와 아버지의 이야기.',
    sections: [
      { paragraphs: ['"귀농할 생각입니다. 집부터 마련해야겠죠?" 필자는 단호하게 답합니다. "안 됩니다. 집을 마련하기 전에 생활부터 하세요." 이 과정을 생략하면 시골살이 성공 확률은 10% 미만으로 떨어집니다.'] },
      { heading: '시골집은 잘 팔리지 않습니다', paragraphs: ['시골집은 이상하리만큼 잘 팔리지 않습니다. 마을 이장 중심으로 거래가 이루어지고 정보가 비대칭이라 시세가 형성되지 않습니다.'] },
      { heading: '아버지의 시골살이', paragraphs: ['필자는 2008년 충남 청양 농지를 경매로 구입하고 컨테이너 주택을 설치했습니다. 가족들이 매년 모여 텃밭을 가꾸고 즐거운 시간을 보냈습니다.', '당시 70대 중반이던 아버지가 청양으로 내려가셨습니다. 담배만 피우시던 아버지가 화초를 가꾸고 연못을 만들며 팔순까지 행복하게 지내셨습니다. 시골은 사람이 원래 자리로 돌아가는 정거장 같습니다.'] },
    ],
  },
  {
    id: 111, num: '⓫', title: "시골집은 '판타지 공간'이 아닙니다",
    date: '2023년 1월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=55018',
    excerpt: 'TV에 나오는 시골살이는 판타지입니다. 시골살이 13년 차가 직접 경험한 잡초, 난방비, 관리비의 현실.',
    sections: [
      { paragraphs: ['하루만 쉬어도 잡초가 무성합니다. 관리비는 끝이 없습니다. 장마철엔 수해, 겨울철엔 동파에 대비해야 합니다. 방송 프로그램에 나오는 시골집은 판타지입니다.'] },
      { heading: '시골살이의 현실', paragraphs: ['여름엔 자고 나면 잡초가 자라 있습니다. 겨울 난방비는 상상을 초월하고, 전기요금도 아파트보다 5% 이상 비쌉니다.', '"가만히 있어도 되겠지"라고 생각하는 순간 일상이 어려워집니다. 시골살이도 현실이기 때문에 돈과 노동을 투입해야 합니다.'] },
      { heading: '그래도 행복합니다', paragraphs: ['시골살이를 꿈꾼다면 먼저 5도2촌 생활로 경험해보세요. 최소 10~15년의 충분한 준비 기간을 거치는 것이 현명합니다. 시골살이는 쉽게 할 수 있는 게 아닙니다. 그 역시 인생의 연장선입니다.'] },
    ],
  },
  {
    id: 112, num: '⓬', title: "주주야야비비에서 찾은 작은 행복",
    date: '2023년 3월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=55263',
    excerpt: '물류센터 시설팀 정규직 재취업 100일. 젊은층이 기피하는 주주야야비비 근무에서 찾은 뜻밖의 행복.',
    sections: [
      { paragraphs: ['5060세대와 2030세대가 똑같은 일자리를 두고 경쟁하면 안 됩니다. 2030세대가 원하지 않는 지점, 그곳에 5060세대의 기회가 있습니다.'] },
      { heading: '주주야야비비란', paragraphs: ['이틀 주간, 이틀 야간, 이틀 휴무를 반복하는 3교대 근무입니다. 주말을 중시하는 젊은층이 선호하지 않아 일자리가 비어 있을 확률이 높습니다.'] },
      { heading: '두 번의 황금 휴식 타이밍', paragraphs: ['주간 근무 후 야간 근무 전: 저녁에 지인을 만나고 다음날 오전·오후를 쉴 수 있는 "꿀 같은 여유"입니다.', '야간 근무 후 이틀 휴무: 첫날엔 시골, 둘째날엔 보고 싶은 사람. 주말 교통 혼잡도 피할 수 있습니다.'] },
    ],
  },
  {
    id: 113, num: '⓭', title: '화이트칼라에서 블루칼라 되기',
    date: '2023년 5월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=55571',
    excerpt: '금융계 30년. 처음 현장에 나갔더니 건강이 더 좋아졌습니다. 화이트칼라에서 블루칼라로의 전환에서 배운 것들.',
    sections: [
      { heading: '마음이 먼저입니다', paragraphs: ['"왕년에 내가…" "나보고 이런 일을 하라고?" 이런 생각을 하는 순간 스트레스만 쌓입니다. 60세 이상 노동자 중 비정규직 비율이 70%를 넘는 현실을 받아들이는 것이 행복의 첫걸음입니다.'] },
      { heading: '현장 일이 건강에 좋습니다', paragraphs: ['물류센터에서 하루 1만보 이상 걸으면서 체중이 줄고 다리 근력이 붙었습니다. 평생 화이트칼라로 산 금융맨의 건강이 더 좋아졌습니다. 몸을 이용하는 일이 그리 나쁜 것도 아닙니다.'] },
      { heading: '주주야야비비 극복법', paragraphs: ['야간 근무 후 첫 번째 휴무일 기상 시간을 "낮 12시"로 정했습니다. 짧게 자고 일어나 일상을 보내면 그날 일찍 잠이 들고 이틀째 휴무가 편해집니다.', '60대쯤 되면 몸과 시간을 통제할 수 있습니다. 주주야야비비, 걱정 마세요.'] },
    ],
  },
  {
    id: 114, num: '⓯', title: '남들이 꺼리는 일 꺼리지 마라',
    date: '2023년 9월',
    url: 'https://www.thescoop.co.kr/news/articleView.html?idxno=58504',
    excerpt: '1년간의 물류센터 생활을 마치며. 은퇴 후 재취업의 틈새 전략과 진정한 워라밸에 대하여.',
    sections: [
      { paragraphs: ['재취업의 비결은 별다른 게 아닙니다. 자격증을 따고, 눈높이를 낮추는 것입니다. 젊은이들이 꺼리는 야간·교대근무를 감수하면 일자리를 구하기 훨씬 쉬워집니다.'] },
      { heading: '틈새 전략', paragraphs: ['재취업이 유망한 분야는 소방안전관리자와 전기기능사입니다. 연봉이 많아봤자 연 3,000만원 수준이지만, 그 속에서 워라밸을 찾을 수 있습니다.'] },
      { heading: '진정한 은퇴는 내려놓기에서', paragraphs: ['과시하려는 삶을 살고 싶다면 은퇴의 길을 선택하면 안 됩니다. 마음을 비우고, 버는 것과 쓰는 것을 바꿔야 행복해질 수 있습니다.', '은퇴가 두렵다면, 눈높이만 조금 낮추면 또 다른 세상이 열립니다. 행복한 은퇴 생활은 그리 멀지 않은 곳에 있습니다.'] },
    ],
  },
];

type View = 'home' | 'blog' | 'column' | number;

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [view, setView] = useState<View>('home');

  function navigate(v: View) {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToCta() {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch('https://formspree.io/f/mykdqzrl', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setSubmitting(false);
    setSubmitted(true);
    document.getElementById('complete-message')?.scrollIntoView({ behavior: 'smooth' });
  }

  const currentPost = typeof view === 'number' && view < 100 ? POSTS.find(p => p.id === view) : null;
  const currentColumn = typeof view === 'number' && view >= 100 ? COLUMNS.find(c => c.id === view) : null;
  const isBlog = view === 'blog' || (typeof view === 'number' && view < 100);
  const isColumn = view === 'column' || (typeof view === 'number' && view >= 100);

  return (
    <div className="antialiased bg-[#F8F9FA]">

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="font-extrabold text-gray-900 text-lg hover:text-[#0084ff] transition-colors"
          >
            엉클조 아카데미
          </button>
          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => navigate('home')}
              className={`text-sm font-medium px-3 py-1 rounded-lg transition-colors ${view === 'home' ? 'text-[#0084ff] bg-blue-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              홈
            </button>
            <button
              onClick={() => navigate('blog')}
              className={`text-sm font-medium px-3 py-1 rounded-lg transition-colors ${isBlog ? 'text-[#0084ff] bg-blue-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              좌충우돌 5년기
            </button>
            <button
              onClick={() => navigate('column')}
              className={`text-sm font-medium px-3 py-1 rounded-lg transition-colors ${isColumn ? 'text-[#0084ff] bg-blue-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              은퇴편지
            </button>
            <button
              onClick={goToCta}
              className="bg-[#0084ff] text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-[#006ed6] transition-colors"
            >
              함께하기
            </button>
          </div>
        </div>
      </nav>

      {/* ── Blog List View ── */}
      {view === 'blog' && (
        <div className="min-h-screen">
          <div className="bg-white border-b border-gray-100 py-16 text-center px-6">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">SERIES · 5편 완결</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-[1.3]">
              경력단절에서<br />경력전환으로
            </h1>
            <p className="text-xl text-gray-500 mb-2">5년의 좌충우돌기</p>
            <p className="text-sm text-gray-400">조경만 (엉클조) | 55세~60세 실제 기록</p>
          </div>
          <div className="max-w-2xl mx-auto px-6 py-12 space-y-4">
            {POSTS.map(post => (
              <button
                key={post.id}
                onClick={() => navigate(post.id)}
                className="w-full text-left bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#0084ff] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-[#0084ff] bg-blue-50 px-3 py-1 rounded-full">{post.id}편</span>
                  <span className="text-xs text-gray-400 font-medium">{post.period}</span>
                </div>
                <h2 className="text-[18px] font-bold text-gray-900 mb-3 group-hover:text-[#0084ff] transition-colors leading-[1.4]">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-[1.8] text-[14px] line-clamp-2">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-[#0084ff]">읽기 →</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Single Post View ── */}
      {currentPost && (
        <div className="min-h-screen">
          <div className="bg-white border-b border-gray-100 pt-10 pb-12 px-6">
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => navigate('blog')}
                className="text-sm text-gray-400 hover:text-[#0084ff] mb-8 flex items-center gap-1 transition-colors"
              >
                ← 시리즈 목록
              </button>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-[#0084ff] bg-blue-50 px-3 py-1 rounded-full">{currentPost.id}편 / 5편</span>
                <span className="text-xs text-gray-400 font-medium">{currentPost.period}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-[1.4] mb-4">
                {currentPost.title}
              </h1>
              <p className="text-gray-400 text-sm">경력단절에서 경력전환으로 — 5년의 좌충우돌기</p>
              <p className="text-gray-400 text-sm mt-1">조경만 (엉클조) | 엉클조아카데미</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-6 py-12">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              {currentPost.sections.map((section, i) => (
                <div key={i} className={i > 0 ? 'mt-10 pt-10 border-t border-gray-100' : ''}>
                  {section.heading && (
                    <h2 className="text-[18px] font-bold text-gray-900 mb-5 leading-[1.4]">{section.heading}</h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-gray-700 leading-[1.9] text-[17px]">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Post navigation */}
            <div className="flex items-center justify-between mt-8">
              {currentPost.id > 1 ? (
                <button
                  onClick={() => navigate(currentPost.id - 1)}
                  className="text-sm font-bold text-gray-400 hover:text-[#0084ff] transition-colors text-left max-w-[45%]"
                >
                  ← 이전 편
                </button>
              ) : <span />}
              {currentPost.id < 5 ? (
                <button
                  onClick={() => navigate(currentPost.id + 1)}
                  className="text-sm font-bold text-[#0084ff] hover:text-[#006ed6] transition-colors text-right max-w-[45%]"
                >
                  다음 편 →
                </button>
              ) : (
                <button
                  onClick={goToCta}
                  className="bg-[#0084ff] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#006ed6] transition-colors"
                >
                  함께하기 신청 →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Column List View ── */}
      {view === 'column' && (
        <div className="min-h-screen">
          <div className="bg-white border-b border-gray-100 py-16 text-center px-6">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">더스쿠프 연재 칼럼</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-[1.3]">
              금융컨설턴트의<br />은퇴편지
            </h1>
            <p className="text-xl text-gray-500 mb-2">더스쿠프 금융컨설턴트로서 전하는 진심 어린 조언</p>
            <p className="text-sm text-gray-400">조경만 (엉클조) · 2021년 5월 — 2023년 9월 · 14편 연재</p>
          </div>
          <div className="max-w-2xl mx-auto px-6 py-12 space-y-4">
            {COLUMNS.map(col => (
              <button
                key={col.id}
                onClick={() => navigate(col.id)}
                className="w-full text-left bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#0084ff] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-white bg-[#2D3648] px-3 py-1 rounded-full">{col.num}</span>
                  <span className="text-xs font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded">더스쿠프</span>
                  <span className="text-xs text-gray-400">{col.date}</span>
                </div>
                <h2 className="text-[18px] font-bold text-gray-900 mb-3 group-hover:text-[#0084ff] transition-colors leading-[1.4]">
                  {col.title}
                </h2>
                <p className="text-gray-500 leading-[1.8] text-[14px] line-clamp-2">{col.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-[#0084ff]">읽기 →</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Single Column View ── */}
      {currentColumn && (
        <div className="min-h-screen">
          <div className="bg-white border-b border-gray-100 pt-10 pb-12 px-6">
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => navigate('column')}
                className="text-sm text-gray-400 hover:text-[#0084ff] mb-8 flex items-center gap-1 transition-colors"
              >
                ← 칼럼 목록
              </button>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-white bg-[#2D3648] px-3 py-1 rounded-full">{currentColumn.num}</span>
                <span className="text-xs font-bold text-gray-500 border border-gray-200 px-2 py-0.5 rounded">더스쿠프</span>
                <span className="text-xs text-gray-400">{currentColumn.date} 연재</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-[1.4] mb-4">
                {currentColumn.title}
              </h1>
              <p className="text-gray-400 text-sm">금융컨설턴트의 은퇴편지</p>
              <p className="text-gray-400 text-sm mt-1">조경만 (엉클조) | 더스쿠프 연재 칼럼</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-6 py-12">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              {currentColumn.sections.map((section, i) => (
                <div key={i} className={i > 0 ? 'mt-10 pt-10 border-t border-gray-100' : ''}>
                  {section.heading && (
                    <h2 className="text-[18px] font-bold text-gray-900 mb-5 leading-[1.4]">{section.heading}</h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-gray-700 leading-[1.9] text-[17px]">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                <a
                  href={currentColumn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gray-300 text-gray-600 font-bold text-sm px-6 py-3 rounded-xl hover:border-[#0084ff] hover:text-[#0084ff] transition-colors"
                >
                  더스쿠프 원문 보기 →
                </a>
              </div>
            </div>

            {/* Column navigation */}
            <div className="flex items-center justify-between mt-8">
              {currentColumn.id > 101 ? (
                <button
                  onClick={() => navigate(currentColumn.id - 1)}
                  className="text-sm font-bold text-gray-400 hover:text-[#0084ff] transition-colors text-left max-w-[45%]"
                >
                  ← 이전 편
                </button>
              ) : <span />}
              {currentColumn.id < 114 ? (
                <button
                  onClick={() => navigate(currentColumn.id + 1)}
                  className="text-sm font-bold text-[#0084ff] hover:text-[#006ed6] transition-colors text-right max-w-[45%]"
                >
                  다음 편 →
                </button>
              ) : (
                <button
                  onClick={goToCta}
                  className="bg-[#0084ff] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#006ed6] transition-colors"
                >
                  함께하기 신청 →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Home View ── */}
      {view === 'home' && (
        <>
          {/* Hero Section */}
          <section className="section-padding flex flex-col items-center justify-center text-center bg-white">
            <h1 className="font-extrabold leading-[1.2] mb-6 tracking-tighter max-w-5xl text-[54px]">명함이 없어도 매일 출근하는 사람들이 있습니다.<br />45세에 시작해서, 75세까지 현역으로.</h1>

            <p className="text-gray-800 max-w-4xl font-normal leading-[1.7] text-center text-[20px] mb-8">60세에 현역이 된 '엉클조'가 현장에서 좌충우돌하며 깨달은 답이 있습니다.</p>

            <p className="text-gray-700 max-w-4xl font-normal leading-[1.8] text-center mb-10 text-[20px]">기술의 가치는 75세까지 유효하며, 경기와 정년에 휘둘리지 않는<br /><span className="text-[#0084ff] font-bold">'법정 선임 기술직'</span>의 세계가 우리 모두를 위한 새로운 대안이 될 수 있다고 믿습니다.</p>

            <p className="text-gray-800 max-w-3xl font-medium leading-[1.8] text-center text-[20px] mb-12">이 길에 관심 있는 분들과 지혜를 모아, 이 가능성을 더 넓고 단단하게 발전시키고 싶습니다.<br />처음으로 함께할 <span className="text-[#0084ff] font-bold">동료(Companion)</span>를 모집합니다.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#cta-form"
                className="cta-animate inline-block bg-[#0084ff] text-white font-bold hover:bg-[#006ed6] transition-all rounded-xl shadow-lg shadow-blue-100 py-5 px-10 text-[20px]"
              >
                함께하기 신청하기
              </a>
              <button
                onClick={() => navigate('blog')}
                className="inline-block border border-gray-200 text-gray-700 font-bold hover:border-[#0084ff] hover:text-[#0084ff] transition-all rounded-xl py-5 px-10 text-[18px]"
              >
                5년 좌충우돌기 읽기 →
              </button>
            </div>
          </section>

          {/* Section 01: The Reality */}
          <section className="section-padding bg-[#F8F9FA] border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
              <span className="text-sm font-bold text-gray-500 uppercase mb-6 block tracking-widest">01. THE REALITY</span>

              <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-[1.3] text-center">
                강의 100개가 0이 된 날,<br />진짜 인생 공부가 시작되었습니다.
              </h2>

              <div className="mb-8 video-wrapper">
                <div className="video-fallback-link">Video Player Load Failed</div>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/oVIURxnFUBQ?start=619&rel=0"
                  title="인생 3막 강연 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <div className="bg-white p-10 md:p-12 shadow-sm rounded-lg text-center relative">
                <p className="text-gray-700 leading-[1.8] mb-6 text-[19px] text-justify">
                  40대 중반에 은퇴 관련 강의를 처음 의뢰받고 제 60대 이후의 삶을 꽤 오랜 시간 치밀하게 준비해 왔습니다.
                </p>
                <p className="text-gray-800 leading-[1.8] mb-6 text-[19px] text-justify">
                  하지만 코로나라는 팬데믹은 제 모든 계획을 뒤흔들었습니다. 갑자기 멈춰버린 일상 속에서 제가 마주한 것은 종이 위의 숫자가 아닌 <strong className="text-[#0084ff] font-bold text-justify">'땀 흘리는 노동의 정직함'</strong>이었습니다.
                </p>
                <p className="text-gray-800 leading-[1.8] mb-8 text-[19px] text-justify">
                  뜻밖의 기간 동안 육체노동의 매력을 발견했고, 경기와 정년에 휘둘리지 않는 <strong className="text-[#0084ff] font-bold">'법정 선임 관리직'</strong>이라는 새로운 생존 경로를 만났습니다. 75세까지 현역으로 일할 수 있는 이 길이, 어쩌면 저와 같은 고민을 하는 분들에게 가장 단단한 대안이 될 수 있음을 깨달았습니다.
                </p>
                <p className="text-gray-900 font-bold leading-[1.8] text-[20px] text-justify">
                  45-55 세대 여러분,<br />저의 이 좌충우돌했던 기록들이 여러분의 인생 3막을 설계하는 데 작은 보탬이 되길 바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02: New Perspective */}
          <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-bold text-gray-500 uppercase mb-6 block tracking-widest">02. NEW PERSPECTIVE</span>

              <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-[1.3]">
                기름때 묻는 노가다?<br />아니요, '시설 관리자'의 품격입니다.
              </h3>
              <div className="text-left max-w-3xl mx-auto">
                <p className="text-gray-800 leading-[1.9] font-normal mb-12 text-[20px]">"내가 누군데 이 나이에 공구를 잡나"라는 마음과 싸우는 것이 기술을 배우는 것보다 더 큰 공부였습니다. 하지만 현장에서 마주한 기술직은 당당한 전문직이었고, 시설의 안전을 책임지는 '주치의'였습니다.<br /><br />상경계 출신 60세 노병인 저도 해냈습니다. 중년의 소통 능력에 기술 한 푼을 얹으면, 당신은 현장에서 가장 환영받는 <strong className="text-[#0084ff] font-bold bg-blue-50 px-2 py-1 rounded">'대체 불가능한 인력'</strong>이 됩니다.</p>
              </div>
            </div>
          </section>

          {/* Section 03: The Roadmap */}
          <section className="section-padding bg-[#F8F9FA]">
            <div className="max-w-6xl mx-auto text-center">
              <span className="text-sm font-bold text-gray-500 uppercase mb-6 block tracking-widest">03. THE ROADMAP</span>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.3]">
                함께 검증할 1년 안착 로드맵
              </h2>
              <p className="text-[#0084ff] font-bold mb-6 text-[24px]">단 1년의 준비로 30년짜리 인생 3막을 설계할 시간입니다</p>
              <p className="text-gray-700 mb-16 leading-[1.8] text-[20px]">'고용24'에서 관심 직종 검색부터 자격증 취득, 취업까지 당신의 경험을 더해 가장 효율적인 경로로 완성해 나갑니다.</p>

              <div className="process-container-4step hidden md:flex">
                <div className="process-line" />
                <div className="circle-step circle-white">
                  <span className="step-num">STEP 01</span>
                  <span className="font-bold text-lg mb-2">탐색</span>
                  <span className="text-sm text-gray-500">'고용24'에서<br />관심 직종 검색 및<br />필수 자격증 확인</span>
                </div>
                <div className="circle-step circle-dark">
                  <span className="step-num text-[#5CB2FF]">STEP 02</span>
                  <span className="font-bold text-lg mb-2">필기</span>
                  <span className="text-sm text-gray-300">3~6개월 투자.<br />이론 정독 및<br />기출문제 반복 풀이</span>
                </div>
                <div className="circle-step circle-white">
                  <span className="step-num">STEP 03</span>
                  <span className="font-bold text-lg mb-2">실기</span>
                  <span className="text-sm text-gray-500">3~6개월 투자.<br />학원 실습을 통한<br />실제 기술 습득</span>
                </div>
                <div className="circle-step circle-dark">
                  <span className="step-num text-[#5CB2FF]">STEP 04</span>
                  <span className="font-bold text-lg mb-2">취업</span>
                  <span className="text-sm text-gray-300">자격증 상단 기재,<br />연륜과 책임감을<br />강조한 면접</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 04: The Strategy */}
          <section className="section-padding bg-white">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-sm font-bold text-gray-500 uppercase mb-6 block tracking-widest">04. THE STRATEGY: PERSONAL COACHING</span>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.3]">
                처음의 동료들과 함께 밟아갈 4단계 동행 프로세스
              </h2>
              <p className="text-gray-700 text-xl mb-16 leading-[1.8]">우리는 막연한 감정이 아니라, 실행 가능한 계획을 만듭니다.</p>

              <div className="hidden md:block max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex items-center gap-8">
                    <div className="coaching-circle coaching-circle-blue flex-shrink-0">
                      <span className="coaching-phase">PHASE 1</span>
                    </div>
                    <div className="flex-1 text-left bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">자산 및 경험 분석 (Asset Audit)</h3>
                      <p className="text-gray-700 leading-[1.8]">단순한 이력을 넘어, 화이트칼라로서 쌓아온 관리 역량과 네트워크를 함께 정밀 진단합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 flex-row-reverse">
                    <div className="coaching-circle coaching-circle-dark flex-shrink-0">
                      <span className="coaching-phase text-[#5CB2FF]">PHASE 2</span>
                    </div>
                    <div className="flex-1 text-right bg-gradient-to-l from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">진입 전략 설계 (Entry Design)</h3>
                      <p className="text-gray-700 leading-[1.8]">분석된 데이터를 바탕으로, 수많은 기술직 중 당신의 강점이 즉시 수익으로 전환될 최적의 분야를 함께 찾아갑니다.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="coaching-circle coaching-circle-blue flex-shrink-0">
                      <span className="coaching-phase">PHASE 3</span>
                    </div>
                    <div className="flex-1 text-left bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">개인별 취득 로드맵 (Custom Roadmap)</h3>
                      <p className="text-gray-700 leading-[1.8]">현재의 생업과 병행 가능한 현실적인 학습 시간표와 최단기 합격 루트를 함께 만들어갑니다.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 flex-row-reverse">
                    <div className="coaching-circle coaching-circle-dark flex-shrink-0">
                      <span className="coaching-phase text-[#5CB2FF]">PHASE 4</span>
                    </div>
                    <div className="flex-1 text-right bg-gradient-to-l from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">수입 연결 구조 완성 (Income Architecture)</h3>
                      <p className="text-gray-700 leading-[1.8]">자격증 취득 이후, 실제 현장 매칭부터 75세까지 지속될 소득 파이프라인의 구조를 함께 완성합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 05: Social Proof */}
          <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-bold text-gray-500 uppercase mb-6 block tracking-widest">05. SOCIAL PROOF</span>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.3]">
                저보다 먼저 이 길을<br />걸어간 분들이 있습니다.
              </h2>
              <p className="text-gray-600 mb-16 text-[20px] leading-[1.8]">
                쉽지 않았습니다. 그래도 해냈습니다.
              </p>

              <div className="space-y-8 text-left mb-16">
                <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0084ff] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">K</div>
                    <div>
                      <p className="font-bold text-gray-900">회계팀 K 과장 · 45세</p>
                      <p className="text-sm text-[#0084ff] font-medium">전기기능사 취득 → 중견기업 시설관리 담당</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-[1.9] text-[18px]">
                    처음엔 필기를 한 번 떨어졌습니다. 숫자와 공식이 낯설었고, 포기할까 생각도 했습니다.<br /><br />
                    그런데 30년 가까이 회계 장부를 들여다본 사람이 전류 계산을 못 할 리 없다는 걸,
                    다시 붙들고 나서야 깨달았습니다. 두 번째 시험에서 합격했습니다.
                  </p>
                  <p className="mt-4 text-sm text-gray-500 font-medium">필기 4개월 + 실기 4개월 · 총 8개월</p>
                </div>

                <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#2D3648] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">P</div>
                    <div>
                      <p className="font-bold text-gray-900">영업본부 P 이사 · 53세</p>
                      <p className="text-sm text-[#0084ff] font-medium">위험물산업기사 취득 → 화학공장 안전 관리자</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-[1.9] text-[18px]">
                    53세에 학원 책상에 앉아 있는 게 민망했습니다. 20대 친구들 사이에서 혼자 돋보기 들고 공부했습니다.
                    면접에서 떨어진 적도 있습니다. 하지만 세 번째 지원에서 합격했습니다.<br /><br />
                    이제는 월급날보다 퇴직 날이 더 자유롭습니다.
                  </p>
                  <p className="mt-4 text-sm text-gray-500 font-medium">자격증 취득 11개월 + 취업 4개월</p>
                </div>

                <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0084ff] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">J</div>
                    <div>
                      <p className="font-bold text-gray-900">총무팀 J 부장 · 49세</p>
                      <p className="text-sm text-[#0084ff] font-medium">소방안전관리사 2급 취득 → 복합건물 시설팀 근무</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-[1.9] text-[18px]">
                    솔직히 첫 달은 교재가 외계어 같았습니다. 전기도, 소방도 생판 처음이었습니다.<br /><br />
                    그래도 총무팀 20년 경력이 있었습니다. 납품업체 관리하고, 시설 하자 클레임 처리하던 사람이
                    시설 관리를 못 할 리 없다고 생각했습니다. 필기 합격까지 5개월,
                    지금은 서울 강남구 복합빌딩 시설팀에서 일하고 있습니다.
                  </p>
                  <p className="mt-4 text-sm text-gray-500 font-medium">필기 합격 5개월</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#F0F7FF] rounded-2xl p-6 text-center">
                  <p className="text-[28px] font-extrabold text-[#0084ff]">6~11개월</p>
                  <p className="text-sm text-gray-600 mt-1 leading-[1.5]">평균<br />자격증 취득 기간</p>
                </div>
                <div className="bg-[#F0F7FF] rounded-2xl p-6 text-center">
                  <p className="text-[28px] font-extrabold text-[#0084ff]">1~4개월</p>
                  <p className="text-sm text-gray-600 mt-1 leading-[1.5]">취득 후<br />평균 취업 소요</p>
                </div>
                <div className="bg-[#F0F7FF] rounded-2xl p-6 text-center">
                  <p className="text-[28px] font-extrabold text-[#0084ff]">82%</p>
                  <p className="text-sm text-gray-600 mt-1 leading-[1.5]">화이트칼라 출신<br />필기 합격률</p>
                </div>
                <div className="bg-[#2D3648] rounded-2xl p-6 text-center">
                  <p className="text-[16px] font-bold text-white leading-[1.6]">빌딩 시설팀<br />공장 안전관리<br />공공기관 운영</p>
                  <p className="text-xs text-gray-400 mt-1">주요 취업처</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="cta-form" className="section-padding bg-[#F1F5F9] text-center">
            <div className="max-w-3xl mx-auto bg-white p-12 md:p-20 rounded-3xl shadow-2xl border border-white">
              <h2 className="font-extrabold mb-8 leading-[1.3] tracking-tight text-[40px]">
                "혼자 꾸는 꿈은 상상이지만,<br />함께 그리는 지도는 현실이 됩니다."
              </h2>
              <p className="text-gray-800 leading-[1.8] mb-8 font-normal text-[20px]">엉클조의 현장경험은&nbsp;&nbsp;여러분과 만날 때,<br />비로소 75세 현역을 향한 단단한 길은 완성될 것입니다.</p>
              <p className="text-gray-700 text-lg md:text-xl leading-[1.8] mb-12 font-medium">
                이제, 처음의 동료로서 그 지도를 함께 완성해 주시겠습니까?
              </p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">이름</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="홍길동"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0084ff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">연락처 (전화 또는 이메일)</label>
                    <input
                      type="text"
                      name="contact"
                      required
                      placeholder="010-0000-0000 또는 이메일"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0084ff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">현재 직종과 나이 (선택)</label>
                    <input
                      type="text"
                      name="background"
                      placeholder="예: 회계팀장 / 48세"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0084ff]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="cta-animate w-full bg-[#0084ff] text-white font-bold hover:bg-[#006ed6] transition-all rounded-xl shadow-lg shadow-blue-100 text-[20px] py-5 disabled:opacity-60"
                  >
                    {submitting ? '신청 중...' : '처음의 동료로 함께하기'}
                  </button>
                  <p className="text-center text-sm text-gray-400 leading-[1.8]">
                    신청 즉시 확정이 아닙니다.<br />
                    엉클조가 직접 연락드려, 이 길이 당신에게 맞는지 함께 확인합니다.
                  </p>
                </form>
              ) : null}
            </div>
          </section>

          {/* 신청 완료 메시지 */}
          <section className={`section-padding bg-white text-center ${submitted ? '' : 'hidden'}`} id="complete-message">
            <div className="max-w-2xl mx-auto">
              <div className="text-5xl mb-6">🤝</div>
              <h2 className="text-4xl font-extrabold mb-4 leading-[1.3]">잘 결정하셨습니다.</h2>
              <p className="text-[#0084ff] font-bold text-xl mb-8">처음의 동료로 신청이 접수되었습니다.</p>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 text-left space-y-4 mb-8">
                <p className="text-gray-700 leading-[1.9] text-[18px]">
                  영업일 기준 <strong>1~2일 내에 엉클조가 직접 연락드립니다.</strong>
                </p>
                <p className="text-gray-700 leading-[1.9] text-[18px]">
                  연락이 오기 전, 아래 영상을 먼저 보고 계시면<br />첫 대화가 훨씬 깊어집니다.
                </p>
                <a href="https://www.youtube-nocookie.com/embed/oVIURxnFUBQ?start=619" className="inline-block text-[#0084ff] font-bold underline text-[18px]">
                  → 엉클조 인생 3막 강연 영상 보기
                </a>
              </div>
              <p className="text-gray-500 text-sm leading-[1.9]">
                신청하셨다고 해서 반드시 함께해야 하는 건 아닙니다.<br />
                첫 연락 이후, 맞지 않는다고 느끼시면 언제든 그만하셔도 됩니다.<br />
                이 길이 당신에게 맞는지, 함께 천천히 확인해 나갈 것입니다.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 bg-white text-center text-sm border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 text-lg mb-4">엉클조 아카데미</h3>
                <div className="space-y-2 text-gray-600">
                  <p>📧 이메일: simhyunvo@naver.com</p>
                  <p>📞 전화: 010-2557-8304</p>
                  <p>🕒 상담 가능 시간: 평일 10:00 - 18:00</p>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex justify-center gap-6 text-gray-500">
                  <a href="https://www.youtube.com/@하프타임클럽" target="_blank" rel="noopener noreferrer" className="hover:text-[#0084ff] transition-colors">YouTube</a>
                </div>
              </div>
              <p className="text-gray-400">© 2024 Uncle Joe Life Strategy Lab. All Rights Reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
