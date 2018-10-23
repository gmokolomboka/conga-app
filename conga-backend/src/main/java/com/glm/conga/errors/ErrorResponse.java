/**
 * 
 */
package com.glm.conga.errors;

/**
 * @author <a href="mailto:mokolomboka@yahoo.fr">GMA</a>
 * created 20 avr. 2018
 * @since 
 * @version $Id$
 */
public class ErrorResponse
{

    private int errorCode;
    private String message;
    
    public int getErrorCode() {
        return errorCode;
    }
    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    
}
