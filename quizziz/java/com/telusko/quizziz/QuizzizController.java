package com.telusko.quizziz;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuizzizController {
    @Autowired
    QuizzizService service;

    @PostMapping("/question")
    public void addQuestion(@RequestBody Question q) {
        service.addQuestion(q);
    }

    @GetMapping("/questions/{lang}")
    public List<Question> getQuestions(@PathVariable String lang) {
        return service.getQuestions(lang);
    }

    @PostMapping("/score")
    public Integer getScore(@RequestBody ScoreResponse alldata) {
        return service.getScore(alldata);
    }

    @GetMapping("/scores")
    public List<Score> getScores() {
        return service.getScores();
    }
}
