/**
 * 
 */
package com.glm.conga.exception;

import org.springframework.http.HttpStatus;

/**
 * @author <a href="mailto:mokolomboka@yahoo.fr">GMA</a>
 * created 5 mars 2017
 * @since 
 * @version $Id$
 */
public class IsUpException extends Exception
{

    private static final long serialVersionUID = 1L;
    private String errorMessage;
    private HttpStatus status;
 
    public String getErrorMessage() {
        return errorMessage;
    }
    public IsUpException(String errorMessage) {
        super(errorMessage);
        this.errorMessage = errorMessage;
    }
    public IsUpException() {
        super();
    }
    /**
     * @param string
     * @param notFound
     */
    public IsUpException( String errorMessage, HttpStatus status )
    {
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.status = status;
    }
}
