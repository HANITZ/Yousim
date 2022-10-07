describe("엔터 키 입력을 통한 네비게이션 구현", () => {
  it("Search 페이지로 이동", () => {
    // 1
    cy.visit("http://localhost:3000/");

    // 2
    cy.get("input").type("아이유{enter}");

    // 3
    cy.url().should("include", "/search/%EC%95%84%EC%9D%B4%EC%9C%A0");
  });
});

describe("클릭을 통한 네비게이션 구현", () => {
  it("Search 페이지로 이동", () => {
    // 1
    cy.visit("http://localhost:3000/");

    // 2
    cy.get("input").type("아이유");

    // 3
    cy.get('[alt="검색"]').click();

    // 4
    cy.url().should("include", "/search/%EC%95%84%EC%9D%B4%EC%9C%A0");
  });
});

describe("Search 페이지 렌더링", () => {
  it("화면 렌더링 여부 확인", () => {
    // 1
    cy.get("input").type("아이유{enter}");

    // 2
    cy.url().should("include", "/search/%EC%95%84%EC%9D%B4%EC%9C%A0");

    // 3 - api 요청

    // 4
    cy.get("li").should("have.length", 3);
  });
});

export {}