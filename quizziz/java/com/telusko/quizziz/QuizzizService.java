package com.telusko.quizziz;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class QuizzizService {

    @Autowired
    QuestionRepository questionRepo;
    @Autowired
    ScoreRepository scoreRepo;
    public void addQuestion(Question q) {
        questionRepo.save(q);
    }

    public List<Question> getQuestions(String lang) {
        return questionRepo.findByLang(lang);
    }

    public Integer getScore(ScoreResponse alldata) {
        String candidate = alldata.getCandidate();
        String lang = alldata.getLang();
        List<Question> questions = alldata.getQuestions();
        List<String> option = alldata.getOption();

        int l = questions.toArray().length;
        int score = 0;
        for (int i = 0; i<l; i++) {
            if (questions.get(i).getRightoption().equals(option.get(i))) {
                score += 1;
            }
        }
        Score s = new Score();
        s.setCandidate(candidate);
        s.setLang(lang);
        s.setCompleted("yes");
        s.setScore(score);
        scoreRepo.save(s);
        return score;
    }

    public List<Score> getScores() {
        return scoreRepo.findAll();
    }
}
