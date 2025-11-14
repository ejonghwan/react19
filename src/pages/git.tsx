import React from 'react'

const Git = () => {
   return (
      <div>
         <div>
            머지할떄 커밋하나 : git merge --squash
            <ul>
               <li>git checkout main </li>
               <li>git merge --squash feature-branch-name<br />이 명령어를 실행하면 feature-branch-name의 모든 변경 내용이 main 브랜치에 스테이징(staging)되지만, 아직 커밋되지는 않습니다. </li>
               <li>git commit -m "원하는 커밋 메시지 입력" </li>
               <li>git push </li>
            </ul>
         </div>
         <div>
            방법 2: git rebase -i를 사용해 로컬에서 커밋 합치기
            <ul>
               <li>git checkout feature-branch-name</li>
               <li>git rebase -i HEAD~3 <br />인터랙티브 리베이스를 실행합니다:
                  합치고 싶은 커밋 개수보다 하나 더 이전의 커밋 해시나 HEAD~N을 지정합니다. 예를 들어, 최근 3개의 커밋을 합치려면 다음 명령어를 사용합니다:</li>
               <li>pick aabbcc1 First commit message<br />
                  pick ddeeff2 Second commit message<br />
                  pick gghhii3 Third commit message<br />
                  편집기에서 커밋을 수정합니다:명령어를 실행하면 텍스트 편집기가 열리고 커밋 목록이 표시됩니다.<br /><br />
                  첫 번째 커밋을 제외한 나머지 커밋들의 pick을 s(squash) 또는 f(fixup)로 변경합니다. s는 메시지를 합칠 때, f는 메시지 없이 내용만 합칠 때 사용합니다.<br />
                  pick aabbcc1 First commit message<br />
                  s ddeeff2 Second commit message<br />
                  s gghhii3 Third commit message<br />
                  파일을 저장하고 편집기를 닫습니다 (Vim의 경우 :wq 입력 후 Enter).
               </li>
               <li>새로운 커밋 메시지를 작성합니다:
                  새로운 편집기 창이 열리며, 합쳐진 커밋들의 메시지를 원하는 하나의 메시지로 수정할 수 있습니다. 메시지를 수정한 후 저장하고 닫습니다.</li>

               <li>메인 브랜치로 병합합니다:
                  이제 feature-branch-name 브랜치에는 하나의 커밋만 남게 됩니다. main 브랜치로 이동하여 병합합니다.</li>
            </ul>
         </div>


         <div>
            <h2>pr</h2>
            <ul>
               <li>1. Fork - 레포에서 포크 클릭하면 내 저장소에 새로운 레포생성됨</li>
               <li>2. 내 저장소 레포를 로컬에 clone, 포크뜬 원본 remote로 설정 (내껀 클론하면서 자동으로 origin 이름으로 저장됨 )<br />git remote add 별칭 원본저장소이름. <br />이렇게하면 리모트 2개가 등록됨. 나중에 원본 저장소 내용과 동기화 하기 위해 사용할 것이기 때문. </li>
               <li>3. branch 생성</li>
               <li>4. 수정 작업 후 add, commit, push</li>
               <li>5. Pull Request 버튼눌러 생성</li>
               <li>6. 코드리뷰, Merge Pull Reqest 버튼 클릭 </li>
               <li>7. Merge 이후 branch 삭제 및 동기화 git branch -d develop .. git pull father # 원본 remote 와 동기화</li>
               https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-%EA%B9%83%ED%97%99-PRPull-Request-%EB%B3%B4%EB%82%B4%EB%8A%94-%EB%B0%A9%EB%B2%95-folk-issue
            </ul>

         </div>


         <div>
            <h2>gitlab pr</h2>
            <ul>
               <li>원본 Repository에서 Fork 떠오기</li>
               <li>Fork 떠온 Repository 내 로컬에 clone</li>
               <li>원본 Repository와 내 로컬 연결</li>
               <li>처음 가져올 때 master 브랜치만 있으므로, 나머지 브랜치들 pull 해오기</li>
               <li>소스코드 수정 후 커밋</li>
               <li>내 Repository에 소스 코드 Push</li>
               <li>Merge Request (Pull Request)</li>
               <li>깃 최신화</li>
            </ul>
            https://velog.io/@yjmint/GitLab%EC%97%90%EC%84%9C-Merge-Request-%EB%B3%B4%EB%82%B4%EB%8A%94-%EB%B0%A9%EB%B2%95

            https://velog.io/@lasid84/gitlab-terminal-pr-mr-guide

            https://zerobin-dev.tistory.com/68
         </div>
      </div>
   )
}

export default Git