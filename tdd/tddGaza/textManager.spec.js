describe('텍스트 관리자', () => {
    
    let textManager;
    // textManager = new TextManager();
    
    // it 함수 호출 직전에 실행됩니다
    beforeEach(() => {
        textManager = new TextManager();
    })

    it('텍스트 값을 전달합니다. getValuse', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })

    it('텍스트 값을 수정합니다', () => {
        const newValue = {data : "hello Zebras"}
        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data);
    })
})