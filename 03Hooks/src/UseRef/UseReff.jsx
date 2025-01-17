import { useRef } from 'react'

export const UseReff = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!usernameRef.current.value) {
        usernameRef.current.focus();
      } else if (!passwordRef.current.value) {
        passwordRef.current.focus();
      } else {
        alert('Form submitted!');
        console.log({username:usernameRef.current.value, password:passwordRef.current.value});
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input ref={usernameRef} placeholder="Username" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit">Submit</button>
      </form>
    );
}
