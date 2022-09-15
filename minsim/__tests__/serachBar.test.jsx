import { render, screen } from '@testing-library/react'
import SearchBar from '../src/pages/SearchBar'
import '@testing-library/jest-dom'


// describe로 컴포넌트 단위의 테스트 실행
describe('SearchBar', () => {
  
  // it로 테스트케이스 작성
  it('검색 버튼을 클릭해서 API 받아오기', async() => {
    const response = await fetch()
    
    // 예상되는 결과
    expect(heading).toBe(200);
  })

  // it로 테스트케이스 작성
  it('검색 버튼을 클릭해서 API 받아오기', async() => {
    const response = await fetch()
    
    // 예상되는 결과
    expect(heading).toBe(200);
  })
})