package com.telusko.quizziz;

import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@ResponseBody
public class ScoreResponse {

    public ScoreResponse() {

    }
    private String candidate;
    private String lang;
    private List<Question> questions;
    private List<String> option;

    public void setCandidate(String candidate) {
        this.candidate = candidate;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public void setOption(List<String> option) {
        this.option = option;
    }

    public String getCandidate() {
        return candidate;
    }

    public String getLang() {
        return lang;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public List<String> getOption() {
        return option;
    }



    @Override
    public String toString() {
        return "ScoreResponse{" +
                "candidate='" + candidate + '\'' +
                ", lang='" + lang + '\'' +
                ", questions=" + questions +
                ", option=" + option +
                '}';
    }
}
