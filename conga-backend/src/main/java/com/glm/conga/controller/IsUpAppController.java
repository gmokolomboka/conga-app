package com.glm.conga.controller;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.glm.conga.errors.ErrorResponse;
import com.glm.conga.exception.IsUpException;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class IsUpAppController {

	 // Define a static logger variable so that it references the
    // Logger instance named "IsUpController".
    private static final Logger logger = LogManager.getLogger(IsUpAppController.class);

    @RequestMapping(value = "/api/isup", method = RequestMethod.GET)
    public ResponseEntity<Boolean> isUp() {
    	try {
    		logger.info("Calling isUp service : The Application is running");
            return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    	}catch (Exception e) {
    		logger.info("Calling isUp service failed : " + e.getMessage());
		}
    	  return new ResponseEntity<Boolean>(true, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(IsUpException.class)
    public ResponseEntity<ErrorResponse> exceptionHandler(Exception ex) {
        ErrorResponse error = new ErrorResponse();
        error.setErrorCode(HttpStatus.PRECONDITION_FAILED.value());
        error.setMessage(ex.getMessage());
        return new ResponseEntity<ErrorResponse>(error, HttpStatus.OK);
    }

}
