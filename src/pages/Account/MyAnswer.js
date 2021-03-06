import React from 'react';
import { Link } from 'react-router-dom';

const MyAnswer = () => {
    return (
        <section class="account-section">
            <div class="account-container">
                <div class="sidebar">
                    <div class="profile">
                        <div class="img-profile"></div>
                        <div class="profile-infos">
                            <div class="profile-info profile-name">황현정</div>
                            <div class="profile-info profile-email">
                              <i class="far fa-envelope"></i> hse05105@naver.com
                            </div>
                            <div class="profile-info profile-date">
                              <i class="fas fa-birthday-cake"></i> 1999.01.23
                            </div>
                        </div>
                    </div>
                    <div class="profile-tabs">
                      <Link class="profile-tab answer-tab" to='/profile/answer'>
                          나의 답변
                      </Link>
                      <Link class="profile-tab account-tab" to='/profile'>
                          나의 계정
                      </Link>
                    </div>
                    <div class="logout-button">
                        <i class="fas fa-power-off"></i>
                        로그아웃
                    </div>
                </div>
                <div class="answer-content">
                    <div class="user-ans-title">나의 답변</div>
                    <div class="user-ans-content">
                        <div class="content-header">연도별</div>
                        <ul class="filter-list">        
                          <li><Link class="year-link" to="/profile/answer">2020</Link></li>
                          <li><Link class="year-link" to="/profile/answer">2019</Link></li>
                          <li><Link class="year-link" to="/profile/answer">2018</Link></li>
                          <li><Link class="year-link" to="/profile/answer">2017</Link></li>
                        </ul>
                        <div class="year-calender" style={{overflow: 'hidden'}}>
                          <svg width="828" height="128" class="js-calendar-graph-svg">
                              <g transform="translate(10, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:40794857,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:40794857,&quot;originating_url&quot;:&quot;https://github.com/giraff&quot;}}" data-hydro-click-hmac="71db1c2d9363f6de19bcdb5b52f21907aed7830c859b14e165a72dd5fe466eb2">
                                  <g transform="translate(0, 0)">
                                      <rect class="day" width="11" height="11" x="16" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-12-29"></rect>
                                      <rect class="day" width="11" height="11" x="16" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-12-30"></rect>
                                      <rect class="day" width="11" height="11" x="16" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2019-12-31"></rect>
                                      <rect class="day" width="11" height="11" x="16" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-01"></rect>
                                      <rect class="day" width="11" height="11" x="16" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-01-02"></rect>
                                      <rect class="day" width="11" height="11" x="16" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-03"></rect>
                                      <rect class="day" width="11" height="11" x="16" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-04"></rect>
                                  </g>
                                  <g transform="translate(16, 0)">
                                      <rect class="day" width="11" height="11" x="15" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-05"></rect>
                                      <rect class="day" width="11" height="11" x="15" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-01-06"></rect>
                                      <rect class="day" width="11" height="11" x="15" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-07"></rect>
                                      <rect class="day" width="11" height="11" x="15" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-01-08"></rect>
                                      <rect class="day" width="11" height="11" x="15" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-01-09"></rect>
                                      <rect class="day" width="11" height="11" x="15" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-10"></rect>
                                      <rect class="day" width="11" height="11" x="15" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-11"></rect>
                                  </g>
                                  <g transform="translate(32, 0)">
                                      <rect class="day" width="11" height="11" x="14" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-12"></rect>
                                      <rect class="day" width="11" height="11" x="14" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-01-13"></rect>
                                      <rect class="day" width="11" height="11" x="14" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-14"></rect>
                                      <rect class="day" width="11" height="11" x="14" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-01-15"></rect>
                                      <rect class="day" width="11" height="11" x="14" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-16"></rect>
                                      <rect class="day" width="11" height="11" x="14" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-17"></rect>
                                      <rect class="day" width="11" height="11" x="14" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-18"></rect>
                                  </g>
                                  <g transform="translate(48, 0)">
                                      <rect class="day" width="11" height="11" x="13" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-19"></rect>
                                      <rect class="day" width="11" height="11" x="13" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-20"></rect>
                                      <rect class="day" width="11" height="11" x="13" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-01-21"></rect>
                                      <rect class="day" width="11" height="11" x="13" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-22"></rect>
                                      <rect class="day" width="11" height="11" x="13" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-23"></rect>
                                      <rect class="day" width="11" height="11" x="13" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-24"></rect>
                                      <rect class="day" width="11" height="11" x="13" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-25"></rect>
                                  </g>
                                  <g transform="translate(64, 0)">
                                      <rect class="day" width="11" height="11" x="12" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-26"></rect>
                                      <rect class="day" width="11" height="11" x="12" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-27"></rect>
                                      <rect class="day" width="11" height="11" x="12" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-28"></rect>
                                      <rect class="day" width="11" height="11" x="12" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-29"></rect>
                                      <rect class="day" width="11" height="11" x="12" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-01-30"></rect>
                                      <rect class="day" width="11" height="11" x="12" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-31"></rect>
                                      <rect class="day" width="11" height="11" x="12" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-01"></rect>
                                  </g>
                                  <g transform="translate(80, 0)">
                                      <rect class="day" width="11" height="11" x="11" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-02"></rect>
                                      <rect class="day" width="11" height="11" x="11" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-02-03"></rect>
                                      <rect class="day" width="11" height="11" x="11" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-04"></rect>
                                      <rect class="day" width="11" height="11" x="11" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-05"></rect>
                                      <rect class="day" width="11" height="11" x="11" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-06"></rect>
                                      <rect class="day" width="11" height="11" x="11" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-07"></rect>
                                      <rect class="day" width="11" height="11" x="11" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-08"></rect>
                                  </g>
                                  <g transform="translate(96, 0)">
                                      <rect class="day" width="11" height="11" x="10" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-02-09"></rect>
                                      <rect class="day" width="11" height="11" x="10" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-02-10"></rect>
                                      <rect class="day" width="11" height="11" x="10" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-11"></rect>
                                      <rect class="day" width="11" height="11" x="10" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-12"></rect>
                                      <rect class="day" width="11" height="11" x="10" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-13"></rect>
                                      <rect class="day" width="11" height="11" x="10" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-14"></rect>
                                      <rect class="day" width="11" height="11" x="10" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-02-15"></rect>
                                  </g>
                                  <g transform="translate(112, 0)">
                                      <rect class="day" width="11" height="11" x="9" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-02-16"></rect>
                                      <rect class="day" width="11" height="11" x="9" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-02-17"></rect>
                                      <rect class="day" width="11" height="11" x="9" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="8" data-date="2020-02-18"></rect>
                                      <rect class="day" width="11" height="11" x="9" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-19"></rect>
                                      <rect class="day" width="11" height="11" x="9" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-20"></rect>
                                      <rect class="day" width="11" height="11" x="9" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-02-21"></rect>
                                      <rect class="day" width="11" height="11" x="9" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-02-22"></rect>
                                  </g>
                                  <g transform="translate(128, 0)">
                                      <rect class="day" width="11" height="11" x="8" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-02-23"></rect>
                                      <rect class="day" width="11" height="11" x="8" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-02-24"></rect>
                                      <rect class="day" width="11" height="11" x="8" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-02-25"></rect>
                                      <rect class="day" width="11" height="11" x="8" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-02-26"></rect>
                                      <rect class="day" width="11" height="11" x="8" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-27"></rect>
                                      <rect class="day" width="11" height="11" x="8" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-28"></rect>
                                      <rect class="day" width="11" height="11" x="8" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-02-29"></rect>
                                  </g>
                                  <g transform="translate(144, 0)">
                                      <rect class="day" width="11" height="11" x="7" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-03-01"></rect>
                                      <rect class="day" width="11" height="11" x="7" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-03-02"></rect>
                                      <rect class="day" width="11" height="11" x="7" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-03-03"></rect>
                                      <rect class="day" width="11" height="11" x="7" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-03-04"></rect>
                                      <rect class="day" width="11" height="11" x="7" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-05"></rect>
                                      <rect class="day" width="11" height="11" x="7" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-03-06"></rect>
                                      <rect class="day" width="11" height="11" x="7" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-03-07"></rect>
                                  </g>
                                  <g transform="translate(160, 0)">
                                      <rect class="day" width="11" height="11" x="6" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-08"></rect>
                                      <rect class="day" width="11" height="11" x="6" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-09"></rect>
                                      <rect class="day" width="11" height="11" x="6" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-10"></rect>
                                      <rect class="day" width="11" height="11" x="6" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-11"></rect>
                                      <rect class="day" width="11" height="11" x="6" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-12"></rect>
                                      <rect class="day" width="11" height="11" x="6" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-13"></rect>
                                      <rect class="day" width="11" height="11" x="6" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-03-14"></rect>
                                  </g>
                                  <g transform="translate(176, 0)">
                                      <rect class="day" width="11" height="11" x="5" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-15"></rect>
                                      <rect class="day" width="11" height="11" x="5" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-03-16"></rect>
                                      <rect class="day" width="11" height="11" x="5" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="9" data-date="2020-03-17"></rect>
                                      <rect class="day" width="11" height="11" x="5" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-18"></rect>
                                      <rect class="day" width="11" height="11" x="5" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-19"></rect>
                                      <rect class="day" width="11" height="11" x="5" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="6" data-date="2020-03-20"></rect>
                                      <rect class="day" width="11" height="11" x="5" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-03-21"></rect>
                                  </g>
                                  <g transform="translate(192, 0)">
                                      <rect class="day" width="11" height="11" x="4" y="0" fill="var(--color-calendar-graph-day-L2-bg)" data-count="20" data-date="2020-03-22"></rect>
                                      <rect class="day" width="11" height="11" x="4" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-23"></rect>
                                      <rect class="day" width="11" height="11" x="4" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="11" data-date="2020-03-24"></rect>
                                      <rect class="day" width="11" height="11" x="4" y="45" fill="var(--color-calendar-graph-day-L2-bg)" data-count="23" data-date="2020-03-25"></rect>
                                      <rect class="day" width="11" height="11" x="4" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-03-26"></rect>
                                      <rect class="day" width="11" height="11" x="4" y="75" fill="var(--color-calendar-graph-day-L2-bg)" data-count="15" data-date="2020-03-27"></rect>
                                      <rect class="day" width="11" height="11" x="4" y="90" fill="var(--color-calendar-graph-day-L2-bg)" data-count="13" data-date="2020-03-28"></rect>
                                  </g>
                                  <g transform="translate(208, 0)">
                                      <rect class="day" width="11" height="11" x="3" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-03-29"></rect>
                                      <rect class="day" width="11" height="11" x="3" y="15" fill="var(--color-calendar-graph-day-L2-bg)" data-count="15" data-date="2020-03-30"></rect>
                                      <rect class="day" width="11" height="11" x="3" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-03-31"></rect>
                                      <rect class="day" width="11" height="11" x="3" y="45" fill="var(--color-calendar-graph-day-L2-bg)" data-count="23" data-date="2020-04-01"></rect>
                                      <rect class="day" width="11" height="11" x="3" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-04-02"></rect>
                                      <rect class="day" width="11" height="11" x="3" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-04-03"></rect>
                                      <rect class="day" width="11" height="11" x="3" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-04-04"></rect>
                                  </g>
                                  <g transform="translate(224, 0)">
                                      <rect class="day" width="11" height="11" x="2" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-04-05"></rect>
                                      <rect class="day" width="11" height="11" x="2" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="9" data-date="2020-04-06"></rect>
                                      <rect class="day" width="11" height="11" x="2" y="30" fill="var(--color-calendar-graph-day-L2-bg)" data-count="17" data-date="2020-04-07"></rect>
                                      <rect class="day" width="11" height="11" x="2" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-08"></rect>
                                      <rect class="day" width="11" height="11" x="2" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-09"></rect>
                                      <rect class="day" width="11" height="11" x="2" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-04-10"></rect>
                                      <rect class="day" width="11" height="11" x="2" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-04-11"></rect>
                                  </g>
                                  <g transform="translate(240, 0)">
                                      <rect class="day" width="11" height="11" x="1" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="6" data-date="2020-04-12"></rect>
                                      <rect class="day" width="11" height="11" x="1" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-13"></rect>
                                      <rect class="day" width="11" height="11" x="1" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="7" data-date="2020-04-14"></rect>
                                      <rect class="day" width="11" height="11" x="1" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-04-15"></rect>
                                      <rect class="day" width="11" height="11" x="1" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-16"></rect>
                                      <rect class="day" width="11" height="11" x="1" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-17"></rect>
                                      <rect class="day" width="11" height="11" x="1" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-18"></rect>
                                  </g>
                                  <g transform="translate(256, 0)">
                                      <rect class="day" width="11" height="11" x="0" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-19"></rect>
                                      <rect class="day" width="11" height="11" x="0" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-20"></rect>
                                      <rect class="day" width="11" height="11" x="0" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="8" data-date="2020-04-21"></rect>
                                      <rect class="day" width="11" height="11" x="0" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-04-22"></rect>
                                      <rect class="day" width="11" height="11" x="0" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-04-23"></rect>
                                      <rect class="day" width="11" height="11" x="0" y="75" fill="var(--color-calendar-graph-day-L2-bg)" data-count="12" data-date="2020-04-24"></rect>
                                      <rect class="day" width="11" height="11" x="0" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="7" data-date="2020-04-25"></rect>
                                  </g>
                                  <g transform="translate(272, 0)">
                                      <rect class="day" width="11" height="11" x="-1" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-04-26"></rect>
                                      <rect class="day" width="11" height="11" x="-1" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-27"></rect>
                                      <rect class="day" width="11" height="11" x="-1" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-28"></rect>
                                      <rect class="day" width="11" height="11" x="-1" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-04-29"></rect>
                                      <rect class="day" width="11" height="11" x="-1" y="60" fill="var(--color-calendar-graph-day-L2-bg)" data-count="14" data-date="2020-04-30"></rect>
                                      <rect class="day" width="11" height="11" x="-1" y="75" fill="var(--color-calendar-graph-day-L2-bg)" data-count="17" data-date="2020-05-01"></rect>
                                      <rect class="day" width="11" height="11" x="-1" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="6" data-date="2020-05-02"></rect>
                                  </g>
                                  <g transform="translate(288, 0)">
                                      <rect class="day" width="11" height="11" x="-2" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-03"></rect>
                                      <rect class="day" width="11" height="11" x="-2" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-04"></rect>
                                      <rect class="day" width="11" height="11" x="-2" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-05-05"></rect>
                                      <rect class="day" width="11" height="11" x="-2" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-05-06"></rect>
                                      <rect class="day" width="11" height="11" x="-2" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-05-07"></rect>
                                      <rect class="day" width="11" height="11" x="-2" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-05-08"></rect>
                                      <rect class="day" width="11" height="11" x="-2" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-05-09"></rect>
                                  </g>
                                  <g transform="translate(304, 0)">
                                      <rect class="day" width="11" height="11" x="-3" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-05-10"></rect>
                                      <rect class="day" width="11" height="11" x="-3" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-11"></rect>
                                      <rect class="day" width="11" height="11" x="-3" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-05-12"></rect>
                                      <rect class="day" width="11" height="11" x="-3" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-05-13"></rect>
                                      <rect class="day" width="11" height="11" x="-3" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="8" data-date="2020-05-14"></rect>
                                      <rect class="day" width="11" height="11" x="-3" y="75" fill="var(--color-calendar-graph-day-L2-bg)" data-count="21" data-date="2020-05-15"></rect>
                                      <rect class="day" width="11" height="11" x="-3" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="10" data-date="2020-05-16"></rect>
                                  </g>
                                  <g transform="translate(320, 0)">
                                      <rect class="day" width="11" height="11" x="-4" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-05-17"></rect>
                                      <rect class="day" width="11" height="11" x="-4" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-05-18"></rect>
                                      <rect class="day" width="11" height="11" x="-4" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-05-19"></rect>
                                      <rect class="day" width="11" height="11" x="-4" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-05-20"></rect>
                                      <rect class="day" width="11" height="11" x="-4" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-05-21"></rect>
                                      <rect class="day" width="11" height="11" x="-4" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-05-22"></rect>
                                      <rect class="day" width="11" height="11" x="-4" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="8" data-date="2020-05-23"></rect>
                                  </g>
                                  <g transform="translate(336, 0)">
                                      <rect class="day" width="11" height="11" x="-5" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-24"></rect>
                                      <rect class="day" width="11" height="11" x="-5" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-25"></rect>
                                      <rect class="day" width="11" height="11" x="-5" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-26"></rect>
                                      <rect class="day" width="11" height="11" x="-5" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-05-27"></rect>
                                      <rect class="day" width="11" height="11" x="-5" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-05-28"></rect>
                                      <rect class="day" width="11" height="11" x="-5" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-05-29"></rect>
                                      <rect class="day" width="11" height="11" x="-5" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-05-30"></rect>
                                  </g>
                                  <g transform="translate(352, 0)">
                                      <rect class="day" width="11" height="11" x="-6" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-05-31"></rect>
                                      <rect class="day" width="11" height="11" x="-6" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-06-01"></rect>
                                      <rect class="day" width="11" height="11" x="-6" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-06-02"></rect>
                                      <rect class="day" width="11" height="11" x="-6" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-06-03"></rect>
                                      <rect class="day" width="11" height="11" x="-6" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-06-04"></rect>
                                      <rect class="day" width="11" height="11" x="-6" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-06-05"></rect>
                                      <rect class="day" width="11" height="11" x="-6" y="90" fill="var(--color-calendar-graph-day-L2-bg)" data-count="12" data-date="2020-06-06"></rect>
                                  </g>
                                  <g transform="translate(368, 0)">
                                      <rect class="day" width="11" height="11" x="-7" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="7" data-date="2020-06-07"></rect>
                                      <rect class="day" width="11" height="11" x="-7" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-06-08"></rect>
                                      <rect class="day" width="11" height="11" x="-7" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-06-09"></rect>
                                      <rect class="day" width="11" height="11" x="-7" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-06-10"></rect>
                                      <rect class="day" width="11" height="11" x="-7" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-11"></rect>
                                      <rect class="day" width="11" height="11" x="-7" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-12"></rect>
                                      <rect class="day" width="11" height="11" x="-7" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-06-13"></rect>
                                  </g>
                                  <g transform="translate(384, 0)">
                                      <rect class="day" width="11" height="11" x="-8" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-06-14"></rect>
                                      <rect class="day" width="11" height="11" x="-8" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-15"></rect>
                                      <rect class="day" width="11" height="11" x="-8" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-16"></rect>
                                      <rect class="day" width="11" height="11" x="-8" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-17"></rect>
                                      <rect class="day" width="11" height="11" x="-8" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-18"></rect>
                                      <rect class="day" width="11" height="11" x="-8" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-19"></rect>
                                      <rect class="day" width="11" height="11" x="-8" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-20"></rect>
                                  </g>
                                  <g transform="translate(400, 0)">
                                      <rect class="day" width="11" height="11" x="-9" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-21"></rect>
                                      <rect class="day" width="11" height="11" x="-9" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-22"></rect>
                                      <rect class="day" width="11" height="11" x="-9" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-06-23"></rect>
                                      <rect class="day" width="11" height="11" x="-9" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-24"></rect>
                                      <rect class="day" width="11" height="11" x="-9" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-25"></rect>
                                      <rect class="day" width="11" height="11" x="-9" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-26"></rect>
                                      <rect class="day" width="11" height="11" x="-9" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-27"></rect>
                                  </g>
                                  <g transform="translate(416, 0)">
                                      <rect class="day" width="11" height="11" x="-10" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-28"></rect>
                                      <rect class="day" width="11" height="11" x="-10" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-29"></rect>
                                      <rect class="day" width="11" height="11" x="-10" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-06-30"></rect>
                                      <rect class="day" width="11" height="11" x="-10" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-01"></rect>
                                      <rect class="day" width="11" height="11" x="-10" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-02"></rect>
                                      <rect class="day" width="11" height="11" x="-10" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-03"></rect>
                                      <rect class="day" width="11" height="11" x="-10" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-04"></rect>
                                  </g>
                                  <g transform="translate(432, 0)">
                                      <rect class="day" width="11" height="11" x="-11" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-05"></rect>
                                      <rect class="day" width="11" height="11" x="-11" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-06"></rect>
                                      <rect class="day" width="11" height="11" x="-11" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-07"></rect>
                                      <rect class="day" width="11" height="11" x="-11" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-07-08"></rect>
                                      <rect class="day" width="11" height="11" x="-11" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="6" data-date="2020-07-09"></rect>
                                      <rect class="day" width="11" height="11" x="-11" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-07-10"></rect>
                                      <rect class="day" width="11" height="11" x="-11" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-07-11"></rect>
                                  </g>
                                  <g transform="translate(448, 0)">
                                      <rect class="day" width="11" height="11" x="-12" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-12"></rect>
                                      <rect class="day" width="11" height="11" x="-12" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-13"></rect>
                                      <rect class="day" width="11" height="11" x="-12" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="10" data-date="2020-07-14"></rect>
                                      <rect class="day" width="11" height="11" x="-12" y="45" fill="var(--color-calendar-graph-day-L2-bg)" data-count="14" data-date="2020-07-15"></rect>
                                      <rect class="day" width="11" height="11" x="-12" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-07-16"></rect>
                                      <rect class="day" width="11" height="11" x="-12" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-07-17"></rect>
                                      <rect class="day" width="11" height="11" x="-12" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-18"></rect>
                                  </g>
                                  <g transform="translate(464, 0)">
                                      <rect class="day" width="11" height="11" x="-13" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-19"></rect>
                                      <rect class="day" width="11" height="11" x="-13" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-07-20"></rect>
                                      <rect class="day" width="11" height="11" x="-13" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-07-21"></rect>
                                      <rect class="day" width="11" height="11" x="-13" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-22"></rect>
                                      <rect class="day" width="11" height="11" x="-13" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-07-23"></rect>
                                      <rect class="day" width="11" height="11" x="-13" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-24"></rect>
                                      <rect class="day" width="11" height="11" x="-13" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-25"></rect>
                                  </g>
                                  <g transform="translate(480, 0)">
                                      <rect class="day" width="11" height="11" x="-14" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-26"></rect>
                                      <rect class="day" width="11" height="11" x="-14" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-27"></rect>
                                      <rect class="day" width="11" height="11" x="-14" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-07-28"></rect>
                                      <rect class="day" width="11" height="11" x="-14" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="5" data-date="2020-07-29"></rect>
                                      <rect class="day" width="11" height="11" x="-14" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-07-30"></rect>
                                      <rect class="day" width="11" height="11" x="-14" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-07-31"></rect>
                                      <rect class="day" width="11" height="11" x="-14" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-08-01"></rect>
                                  </g>
                                  <g transform="translate(496, 0)">
                                      <rect class="day" width="11" height="11" x="-15" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-02"></rect>
                                      <rect class="day" width="11" height="11" x="-15" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-08-03"></rect>
                                      <rect class="day" width="11" height="11" x="-15" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-04"></rect>
                                      <rect class="day" width="11" height="11" x="-15" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-05"></rect>
                                      <rect class="day" width="11" height="11" x="-15" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-06"></rect>
                                      <rect class="day" width="11" height="11" x="-15" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-07"></rect>
                                      <rect class="day" width="11" height="11" x="-15" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-08"></rect>
                                  </g>
                                  <g transform="translate(512, 0)">
                                      <rect class="day" width="11" height="11" x="-16" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-09"></rect>
                                      <rect class="day" width="11" height="11" x="-16" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-10"></rect>
                                      <rect class="day" width="11" height="11" x="-16" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-11"></rect>
                                      <rect class="day" width="11" height="11" x="-16" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="7" data-date="2020-08-12"></rect>
                                      <rect class="day" width="11" height="11" x="-16" y="60" fill="var(--color-calendar-graph-day-L2-bg)" data-count="12" data-date="2020-08-13"></rect>
                                      <rect class="day" width="11" height="11" x="-16" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-14"></rect>
                                      <rect class="day" width="11" height="11" x="-16" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-15"></rect>
                                  </g>
                                  <g transform="translate(528, 0)">
                                      <rect class="day" width="11" height="11" x="-17" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-16"></rect>
                                      <rect class="day" width="11" height="11" x="-17" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-17"></rect>
                                      <rect class="day" width="11" height="11" x="-17" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-18"></rect>
                                      <rect class="day" width="11" height="11" x="-17" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-19"></rect>
                                      <rect class="day" width="11" height="11" x="-17" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-20"></rect>
                                      <rect class="day" width="11" height="11" x="-17" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-21"></rect>
                                      <rect class="day" width="11" height="11" x="-17" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-22"></rect>
                                  </g>
                                  <g transform="translate(544, 0)">
                                      <rect class="day" width="11" height="11" x="-18" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-23"></rect>
                                      <rect class="day" width="11" height="11" x="-18" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-24"></rect>
                                      <rect class="day" width="11" height="11" x="-18" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-25"></rect>
                                      <rect class="day" width="11" height="11" x="-18" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-08-26"></rect>
                                      <rect class="day" width="11" height="11" x="-18" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-27"></rect>
                                      <rect class="day" width="11" height="11" x="-18" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-28"></rect>
                                      <rect class="day" width="11" height="11" x="-18" y="90" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-08-29"></rect>
                                  </g>
                                  <g transform="translate(560, 0)">
                                      <rect class="day" width="11" height="11" x="-19" y="0" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-08-30"></rect>
                                      <rect class="day" width="11" height="11" x="-19" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-08-31"></rect>
                                      <rect class="day" width="11" height="11" x="-19" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-01"></rect>
                                      <rect class="day" width="11" height="11" x="-19" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-02"></rect>
                                      <rect class="day" width="11" height="11" x="-19" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-03"></rect>
                                      <rect class="day" width="11" height="11" x="-19" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-04"></rect>
                                      <rect class="day" width="11" height="11" x="-19" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-05"></rect>
                                  </g>
                                  <g transform="translate(576, 0)">
                                      <rect class="day" width="11" height="11" x="-20" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-06"></rect>
                                      <rect class="day" width="11" height="11" x="-20" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-07"></rect>
                                      <rect class="day" width="11" height="11" x="-20" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-08"></rect>
                                      <rect class="day" width="11" height="11" x="-20" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-09"></rect>
                                      <rect class="day" width="11" height="11" x="-20" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-10"></rect>
                                      <rect class="day" width="11" height="11" x="-20" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-11"></rect>
                                      <rect class="day" width="11" height="11" x="-20" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-12"></rect>
                                  </g>
                                  <g transform="translate(592, 0)">
                                      <rect class="day" width="11" height="11" x="-21" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-13"></rect>
                                      <rect class="day" width="11" height="11" x="-21" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-14"></rect>
                                      <rect class="day" width="11" height="11" x="-21" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-15"></rect>
                                      <rect class="day" width="11" height="11" x="-21" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-16"></rect>
                                      <rect class="day" width="11" height="11" x="-21" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-17"></rect>
                                      <rect class="day" width="11" height="11" x="-21" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-18"></rect>
                                      <rect class="day" width="11" height="11" x="-21" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-19"></rect>
                                  </g>
                                  <g transform="translate(608, 0)">
                                      <rect class="day" width="11" height="11" x="-22" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-20"></rect>
                                      <rect class="day" width="11" height="11" x="-22" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-21"></rect>
                                      <rect class="day" width="11" height="11" x="-22" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-22"></rect>
                                      <rect class="day" width="11" height="11" x="-22" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-23"></rect>
                                      <rect class="day" width="11" height="11" x="-22" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-24"></rect>
                                      <rect class="day" width="11" height="11" x="-22" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-25"></rect>
                                      <rect class="day" width="11" height="11" x="-22" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-26"></rect>
                                  </g>
                                  <g transform="translate(624, 0)">
                                      <rect class="day" width="11" height="11" x="-23" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-27"></rect>
                                      <rect class="day" width="11" height="11" x="-23" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-28"></rect>
                                      <rect class="day" width="11" height="11" x="-23" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-29"></rect>
                                      <rect class="day" width="11" height="11" x="-23" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-09-30"></rect>
                                      <rect class="day" width="11" height="11" x="-23" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-01"></rect>
                                      <rect class="day" width="11" height="11" x="-23" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-02"></rect>
                                      <rect class="day" width="11" height="11" x="-23" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-03"></rect>
                                  </g>
                                  <g transform="translate(640, 0)">
                                      <rect class="day" width="11" height="11" x="-24" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-04"></rect>
                                      <rect class="day" width="11" height="11" x="-24" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-05"></rect>
                                      <rect class="day" width="11" height="11" x="-24" y="30" fill="var(--color-calendar-graph-day-L4-bg)" data-count="47" data-date="2020-10-06"></rect>
                                      <rect class="day" width="11" height="11" x="-24" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-10-07"></rect>
                                      <rect class="day" width="11" height="11" x="-24" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-08"></rect>
                                      <rect class="day" width="11" height="11" x="-24" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-09"></rect>
                                      <rect class="day" width="11" height="11" x="-24" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-10"></rect>
                                  </g>
                                  <g transform="translate(656, 0)">
                                      <rect class="day" width="11" height="11" x="-25" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-11"></rect>
                                      <rect class="day" width="11" height="11" x="-25" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-12"></rect>
                                      <rect class="day" width="11" height="11" x="-25" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-13"></rect>
                                      <rect class="day" width="11" height="11" x="-25" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-14"></rect>
                                      <rect class="day" width="11" height="11" x="-25" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-15"></rect>
                                      <rect class="day" width="11" height="11" x="-25" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-16"></rect>
                                      <rect class="day" width="11" height="11" x="-25" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-17"></rect>
                                  </g>
                                  <g transform="translate(672, 0)">
                                      <rect class="day" width="11" height="11" x="-26" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-18"></rect>
                                      <rect class="day" width="11" height="11" x="-26" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-19"></rect>
                                      <rect class="day" width="11" height="11" x="-26" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-20"></rect>
                                      <rect class="day" width="11" height="11" x="-26" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-21"></rect>
                                      <rect class="day" width="11" height="11" x="-26" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-22"></rect>
                                      <rect class="day" width="11" height="11" x="-26" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-23"></rect>
                                      <rect class="day" width="11" height="11" x="-26" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-24"></rect>
                                  </g>
                                  <g transform="translate(688, 0)">
                                      <rect class="day" width="11" height="11" x="-27" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-25"></rect>
                                      <rect class="day" width="11" height="11" x="-27" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-26"></rect>
                                      <rect class="day" width="11" height="11" x="-27" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-27"></rect>
                                      <rect class="day" width="11" height="11" x="-27" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-28"></rect>
                                      <rect class="day" width="11" height="11" x="-27" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-10-29"></rect>
                                      <rect class="day" width="11" height="11" x="-27" y="75" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-10-30"></rect>
                                      <rect class="day" width="11" height="11" x="-27" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-10-31"></rect>
                                  </g>
                                  <g transform="translate(704, 0)">
                                      <rect class="day" width="11" height="11" x="-28" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-01"></rect>
                                      <rect class="day" width="11" height="11" x="-28" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-02"></rect>
                                      <rect class="day" width="11" height="11" x="-28" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-11-03"></rect>
                                      <rect class="day" width="11" height="11" x="-28" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-11-04"></rect>
                                      <rect class="day" width="11" height="11" x="-28" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2020-11-05"></rect>
                                      <rect class="day" width="11" height="11" x="-28" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-06"></rect>
                                      <rect class="day" width="11" height="11" x="-28" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-07"></rect>
                                  </g>
                                  <g transform="translate(720, 0)">
                                      <rect class="day" width="11" height="11" x="-29" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-08"></rect>
                                      <rect class="day" width="11" height="11" x="-29" y="15" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-11-09"></rect>
                                      <rect class="day" width="11" height="11" x="-29" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-11-10"></rect>
                                      <rect class="day" width="11" height="11" x="-29" y="45" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-11-11"></rect>
                                      <rect class="day" width="11" height="11" x="-29" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-12"></rect>
                                      <rect class="day" width="11" height="11" x="-29" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-13"></rect>
                                      <rect class="day" width="11" height="11" x="-29" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-14"></rect>
                                  </g>
                                  <g transform="translate(736, 0)">
                                      <rect class="day" width="11" height="11" x="-30" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-15"></rect>
                                      <rect class="day" width="11" height="11" x="-30" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-16"></rect>
                                      <rect class="day" width="11" height="11" x="-30" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-17"></rect>
                                      <rect class="day" width="11" height="11" x="-30" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-18"></rect>
                                      <rect class="day" width="11" height="11" x="-30" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-19"></rect>
                                      <rect class="day" width="11" height="11" x="-30" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-20"></rect>
                                      <rect class="day" width="11" height="11" x="-30" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-21"></rect>
                                  </g>
                                  <g transform="translate(752, 0)">
                                      <rect class="day" width="11" height="11" x="-31" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-22"></rect>
                                      <rect class="day" width="11" height="11" x="-31" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-23"></rect>
                                      <rect class="day" width="11" height="11" x="-31" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-24"></rect>
                                      <rect class="day" width="11" height="11" x="-31" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-25"></rect>
                                      <rect class="day" width="11" height="11" x="-31" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-26"></rect>
                                      <rect class="day" width="11" height="11" x="-31" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-27"></rect>
                                      <rect class="day" width="11" height="11" x="-31" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-28"></rect>
                                  </g>
                                  <g transform="translate(768, 0)">
                                      <rect class="day" width="11" height="11" x="-32" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-29"></rect>
                                      <rect class="day" width="11" height="11" x="-32" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-11-30"></rect>
                                      <rect class="day" width="11" height="11" x="-32" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-01"></rect>
                                      <rect class="day" width="11" height="11" x="-32" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-02"></rect>
                                      <rect class="day" width="11" height="11" x="-32" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-03"></rect>
                                      <rect class="day" width="11" height="11" x="-32" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-04"></rect>
                                      <rect class="day" width="11" height="11" x="-32" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-05"></rect>
                                  </g>
                                  <g transform="translate(784, 0)">
                                      <rect class="day" width="11" height="11" x="-33" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-06"></rect>
                                      <rect class="day" width="11" height="11" x="-33" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-07"></rect>
                                      <rect class="day" width="11" height="11" x="-33" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-08"></rect>
                                      <rect class="day" width="11" height="11" x="-33" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-09"></rect>
                                      <rect class="day" width="11" height="11" x="-33" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-10"></rect>
                                      <rect class="day" width="11" height="11" x="-33" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-11"></rect>
                                      <rect class="day" width="11" height="11" x="-33" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-12"></rect>
                                  </g>
                                  <g transform="translate(800, 0)">
                                      <rect class="day" width="11" height="11" x="-34" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-13"></rect>
                                      <rect class="day" width="11" height="11" x="-34" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-14"></rect>
                                      <rect class="day" width="11" height="11" x="-34" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-15"></rect>
                                      <rect class="day" width="11" height="11" x="-34" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-16"></rect>
                                      <rect class="day" width="11" height="11" x="-34" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-17"></rect>
                                      <rect class="day" width="11" height="11" x="-34" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-18"></rect>
                                      <rect class="day" width="11" height="11" x="-34" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-19"></rect>
                                  </g>
                                  <g transform="translate(816, 0)">
                                      <rect class="day" width="11" height="11" x="-35" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-20"></rect>
                                      <rect class="day" width="11" height="11" x="-35" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-21"></rect>
                                      <rect class="day" width="11" height="11" x="-35" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-22"></rect>
                                      <rect class="day" width="11" height="11" x="-35" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-23"></rect>
                                      <rect class="day" width="11" height="11" x="-35" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-24"></rect>
                                      <rect class="day" width="11" height="11" x="-35" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-25"></rect>
                                      <rect class="day" width="11" height="11" x="-35" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-26"></rect>
                                  </g>
                                  <g transform="translate(832, 0)">
                                      <rect class="day" width="11" height="11" x="-36" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-27"></rect>
                                      <rect class="day" width="11" height="11" x="-36" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-28"></rect>
                                      <rect class="day" width="11" height="11" x="-36" y="30" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-29"></rect>
                                      <rect class="day" width="11" height="11" x="-36" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-30"></rect>
                                      <rect class="day" width="11" height="11" x="-36" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-12-31"></rect>
                                      <rect class="day" width="11" height="11" x="-36" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2021-01-01"></rect>
                                  </g>
                                  <text x="31" y="-8" class="month">Jan</text>
                                  <text x="91" y="-8" class="month">Feb</text>
                                  <text x="151" y="-8" class="month">Mar</text>
                                  <text x="226" y="-8" class="month">Apr</text>
                                  <text x="286" y="-8" class="month">May</text>
                                  <text x="361" y="-8" class="month">Jun</text>
                                  <text x="421" y="-8" class="month">Jul</text>
                                  <text x="481" y="-8" class="month">Aug</text>
                                  <text x="556" y="-8" class="month">Sep</text>
                                  <text x="616" y="-8" class="month">Oct</text>
                                  <text x="676" y="-8" class="month">Nov</text>
                                  <text x="751" y="-8" class="month">Dec</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="8" style={{display: 'none'}}>Sun</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="25">Mon</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="32" style={{display: 'none'}}>Tue</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="56">Wed</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="57" style={{display: 'none'}}>Thu</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="85">Fri</text>
                                <text text-anchor="start" class="wday" dx="-10" dy="81" style={{display: 'none'}}>Sat</text>
                                </g>
                            </svg>
                        </div>
                        <div class="category-wrapper">
                            <div class="category category-year">
                                <div class="label label-year">2020</div>
                                <div class="category category-month">
                                    <div class="label label-month">9월</div>
                                    <div class="category category-day">
                                        <div class="label label-day">19일</div>
                                        <div class="my-answer-container">
                                            <Link class="my-answer-elem expr-answer">내가 한 경험</Link>
                                            <Link class="my-answer-elem me-answer" to="/profile/answer/view">내가 보는 나</Link>
                                            <Link class="my-answer-elem reflection-answer">오늘의 성찰</Link>
                                        </div>
                                    </div>
                                    <div class="day-wrap category-day">
                                    </div>
                                    <div class="day-wrap category-day">
                                    </div>
                                </div>
                                <div class="category category-month">
                                    <div class="label label-month">8월</div>
                                </div>
                                <div class="category category-month">
                                    <div class="label label-month">5월</div>
                                </div>
                                
                            </div>
                        </div>

                        {/* <div class="year-category">
                            <div class="year-header">
                                <div class="year-label">
                                    2020
                                </div>  
                            </div> 
                            <div class="year-header">
                                <div class="year-label">
                                    2019
                                </div>
                            </div>
                            <div class="year-header">
                                <div class="year-label">
                                    2018
                                </div>  
                          </div> 
                        </div> */}
                    </div>
                </div>
                </div>
          </section>
    );
}

export default MyAnswer;