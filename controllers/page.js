const { User, Post } = require('../models');

// 프로필 페이지를 렌더링하는 함수 정의
exports.renderProfile = (req, res) => {
    // 'profile' 템플릿 렌더링, 'title' 변수 설정
    res.render('profile', { title: '내 정보 - NodeBird' });
};

// 회원 가입 페이지를 렌더링하는 함수 정의
exports.renderJoin = (req, res) => {
    // 'join' 템플릿 렌더링, 'title' 변수 설정
    res.render('join', { title: '회원 가입 - NodeBird' });
};

// 메인 페이지를 렌더링하는 함수 정의
exports.renderMain = (req, res, next) => {
    try {
        const posts = await Post.findAll({

        })
    }

    // 'main' 템플릿 렌더링, 'title' 및 'twits' 변수 설정
    res.render('main', {
        title: 'NodeBird', // 페이지 타이틀을 설정합니다.
        twits, // 트윗 목록을 설정합니다.
    });
};