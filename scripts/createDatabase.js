const { Sequelize } = require('sequelize');  // Sequelize 모듈 -> Sequelize 객체를 불러오기
const config = require('../config/config.json').development;  // 설정 파일 -> development 환경의 설정 불러오기

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,  // 데이터베이스 호스트 주소
    dialect: config.dialect,  // 데이터베이스 종류 (여기서는 PostgreSQL)
});

async function createDatabase() {
    try {
        // Sequelize의 query 메서드를 사용하여 데이터베이스 생성 쿼리 실행
        await sequelize.query(`CREATE DATABASE ${config.database};`);
        console.log(`Database ${config.database} created successfully.`);
    } catch (error) {
        console.error('Error creating database:', error);  // 데이터베이스 생성 중 오류 발생 시 오류 메시지 출력
    } finally {
        await sequelize.close();  // Sequelize 연결 닫기
    }
}

createDatabase();  // createDatabase 함수 호출 -> 데이터베이스 생성 작업 시작
