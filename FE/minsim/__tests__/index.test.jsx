import { render, screen } from '@testing-library/react'
import Index from '../src/pages/index'
import '@testing-library/jest-dom'


// describe로 컴포넌트 단위의 테스트 실행
describe('Index', () => {

  // it로 테스트케이스 작성
  it('renders a heading', () => {
    render(<Index />)

    const heading = screen.getByRole('heading', {
      name: 'hello minsim'
    })

    // 예상되는 결과
    expect(heading).toBeInTheDocument()
  })
})