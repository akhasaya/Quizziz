package com.telusko.quizziz;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Question {
    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private int id;
    private String lang;
    private String question;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String rightoption;
}
